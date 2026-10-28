import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

type Carona = {
  id: string; origem: string; destino: string; horario: string;
  data: string; vagas: number; motorista: string; observacao: string;
};

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3000";

export default function HomeScreen() {
  const router = useRouter();
  const [caronas, setCaronas] = useState<Carona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadCaronas = useCallback(async () => {
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/caronas`);
      if (!response.ok) throw new Error("A API respondeu com erro.");
      const data = await response.json();
      setCaronas(data.caronas ?? []);
    } catch {
      setError("Não consegui acessar a API. Confira se o Next.js está ligado e se o IP em mobile/.env está correto.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { loadCaronas(); }, [loadCaronas]);

  return <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Text style={styles.logo}>🚗 CaronaChat</Text>
      <Text style={styles.subtitle}>Encontre uma carona para o seu destino.</Text>
    </View>
    <View style={styles.intro}>
      <Text style={styles.title}>Caronas disponíveis</Text>
      <Text style={styles.description}>Escolha uma opção e converse para combinar os detalhes.</Text>
    </View>
    {loading ? <ActivityIndicator size="large" style={{ marginTop: 30 }} /> :
      error ? <View style={styles.empty}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retry} onPress={loadCaronas}><Text style={styles.retryText}>Tentar novamente</Text></TouchableOpacity>
      </View> :
      <FlatList
        contentContainerStyle={styles.list}
        data={caronas}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadCaronas(); }} />}
        ListEmptyComponent={<Text style={styles.description}>Nenhuma carona cadastrada no momento.</Text>}
        renderItem={({ item }) => <View style={styles.card}>
          <View style={styles.routeRow}>
            <View style={styles.routeDot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.routeLabel}>SAÍDA</Text>
              <Text style={styles.route}>{item.origem}</Text>
            </View>
          </View>
          <View style={styles.routeRow}>
            <View style={styles.destinationDot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.routeLabel}>DESTINO</Text>
              <Text style={styles.route}>{item.destino}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.detail}>🕒 {item.horario} · {item.data}</Text>
            <Text style={styles.detail}>💺 {item.vagas} vaga(s)</Text>
          </View>
          <Text style={styles.driver}>Oferecida por {item.motorista}</Text>
          <Text style={styles.note}>{item.observacao}</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: "/chat/[id]", params: { id: item.id, title: `${item.origem} → ${item.destino}`, motorista: item.motorista } })}>
            <Text style={styles.buttonText}>Pedir carona / conversar</Text>
          </TouchableOpacity>
        </View>}
      />
    }
    <Text style={styles.footer}>CaronaChat • Combine com responsabilidade</Text>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f5f7fb" },
  header: { backgroundColor: "#ffffff", paddingHorizontal: 22, paddingTop: 18, paddingBottom: 20, borderBottomWidth: 1, borderColor: "#e8edf4" },
  logo: { fontSize: 25, fontWeight: "800", color: "#172554" },
  subtitle: { marginTop: 6, fontSize: 14, color: "#64748b" },
  intro: { paddingHorizontal: 20, paddingTop: 22, paddingBottom: 8 },
  title: { fontSize: 22, fontWeight: "800", color: "#0f172a" },
  description: { marginTop: 6, color: "#64748b", fontSize: 14, lineHeight: 20 },
  list: { padding: 16, paddingBottom: 24 },
  card: { backgroundColor: "#fff", padding: 17, borderRadius: 18, marginBottom: 14, borderWidth: 1, borderColor: "#e6ebf2" },
  routeRow: { flexDirection: "row", alignItems: "center", marginBottom: 13, gap: 11 },
  routeDot: { width: 11, height: 11, borderRadius: 6, backgroundColor: "#2563eb" },
  destinationDot: { width: 11, height: 11, borderRadius: 3, backgroundColor: "#16a34a" },
  routeLabel: { color: "#94a3b8", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  route: { color: "#172554", fontSize: 15, fontWeight: "700", marginTop: 2 },
  details: { backgroundColor: "#f8fafc", borderRadius: 10, padding: 10, gap: 6, marginBottom: 11 },
  detail: { color: "#475569", fontSize: 13 },
  driver: { fontWeight: "700", color: "#334155", fontSize: 13 },
  note: { color: "#64748b", marginTop: 4, fontSize: 12 },
  button: { backgroundColor: "#2563eb", paddingVertical: 13, borderRadius: 11, alignItems: "center", marginTop: 15 },
  buttonText: { color: "#fff", fontWeight: "800", fontSize: 14 },
  empty: { padding: 20, alignItems: "center" },
  error: { color: "#b91c1c", textAlign: "center", lineHeight: 21 },
  retry: { marginTop: 14, backgroundColor: "#1d4ed8", borderRadius: 10, padding: 12 },
  retryText: { color: "#fff", fontWeight: "700" },
  footer: { textAlign: "center", color: "#94a3b8", fontSize: 11, paddingVertical: 10 }
});
