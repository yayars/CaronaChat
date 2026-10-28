import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  AppState,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { supabase, supabaseIsConfigured } from "../../lib/supabase";

type Message = {
  id: string;
  ride_id: string;
  sender_id: string;
  sender_name: string;
  text: string;
  created_at: string;
};

export default function ChatScreen() {
  const { id, title, motorista } =
    useLocalSearchParams<{
      id: string;
      title?: string;
      motorista?: string;
    }>();

  const router = useRouter();
  const rideId = String(id ?? "carona-1");

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const [sending, setSending] = useState(false);

  const currentUser = { id: "aluno-demo", name: "Você" };

  // Respostas automáticas do CaronaChat
  const getAutomaticReply = (message: string) => {
    const text = message
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,!?]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const horarios = [
      {
        hora: "07h10",
        variacoes: ["07h10", "7h10", "07:10", "7:10", "07 10", "7 10"],
        origem: "Centro de Caraguatatuba",
        destino: "IFSP Campus Caraguatatuba",
      },
      {
        hora: "07h25",
        variacoes: ["07h25", "7h25", "07:25", "7:25", "07 25", "7 25"],
        origem: "Indaiá",
        destino: "IFSP Campus Caraguatatuba",
      },
      {
        hora: "08h00",
        variacoes: ["08h00", "8h00", "08:00", "8:00", "08 00", "8 00"],
        origem: "Porto Novo",
        destino: "Centro de Caraguatatuba",
      },
    ];

    const querConfirmar =
      text.includes("confirmar") ||
      text.includes("confirmo") ||
      text.includes("marcar") ||
      text.includes("reservar") ||
      text.includes("quero a carona") ||
      text.includes("quero ir") ||
      text.includes("vou nessa") ||
      text.includes("pode ser") ||
      text.includes("quero essa carona");

    const horarioEscolhido = horarios.find((item) =>
      item.variacoes.some((variacao) => text.includes(variacao))
    );

    // Confirmação simulada quando a pessoa informa o horário e a intenção.
    if (horarioEscolhido && querConfirmar) {
      return (
        "✅ Solicitação de carona registrada nesta conversa!\n\n" +
        `🚗 Origem: ${horarioEscolhido.origem}\n` +
        `📍 Destino: ${horarioEscolhido.destino}\n` +
        `🕒 Horário: ${horarioEscolhido.hora}\n\n` +
        "Atenção: " +
        "A carona está confirmada "
      );
    }

    // A pessoa informou somente o horário.
    if (horarioEscolhido) {
      return (
        `🕒 Você escolheu a carona das ${horarioEscolhido.hora}!\n\n` +
        "Para registrar a solicitação nesta conversa, escreva: " +
        `“Quero confirmar a carona das ${horarioEscolhido.hora}”. 🚗`
      );
    }

    // Consulta de horários.
    if (
      text.includes("horario") ||
      text.includes("que horas") ||
      text.includes("qual hora") ||
      text.includes("quando sai") ||
      text.includes("horas sai") ||
      text.includes("hora da carona")
    ) {
      return (
        "🕒 Estes são os horários das caronas cadastradas:\n\n" +
        "🚗 Centro de Caraguatatuba → IFSP: 07h10, de segunda a sexta.\n\n" +
        "🚗 Indaiá → IFSP: 07h25, de segunda a sexta.\n\n" +
        "🚗 Porto Novo → Centro: 08h00, horário a combinar.\n\n" +
        "Para escolher, escreva, por exemplo: " +
        "“Quero confirmar a carona das 07h10”. 😊"
      );
    }

    // Saudações.
    if (
      text.includes("oi") ||
      text.includes("ola") ||
      text.includes("bom dia") ||
      text.includes("boa tarde") ||
      text.includes("boa noite")
    ) {
      return "Olá! 😊 Bem-vindo ao CaronaChat! Posso mostrar os horários e ajudar você a escolher uma carona.";
    }

    // Vagas disponíveis.
    if (
      text.includes("vaga") ||
      text.includes("lugar") ||
      text.includes("disponivel")
    ) {
      return "🚗 Para saber se ainda há vagas, confira a carona cadastrada e confirme a disponibilidade diretamente com o motorista.";
    }

    // Preços.
    if (
      text.includes("preco") ||
      text.includes("valor") ||
      text.includes("quanto custa") ||
      text.includes("custa")
    ) {
      return "💰 Os preços não estão informados no momento. Combine com o motorista se haverá algum custo antes de confirmar a carona.";
    }

    // Localização e ponto de encontro.
    if (
      text.includes("onde") ||
      text.includes("local") ||
      text.includes("ponto de encontro") ||
      text.includes("endereco")
    ) {
      return "📍 Os locais cadastrados incluem Centro, Indaiá, Porto Novo e IFSP. Combine com o motorista o ponto exato de encontro.";
    }

    if (text.includes("obrigad")) {
      return "Por nada! 💙 O CaronaChat está aqui para ajudar você a organizar sua carona.";
    }

    if (text.includes("ajuda")) {
      return "😊 Posso ajudar com horários, vagas, preços e pontos de encontro. Pergunte o que você gostaria de saber!";
    }

    if (
      text.includes("tchau") ||
      text.includes("ate mais") ||
      text.includes("falou")
    ) {
      return "Até mais! 👋 Boa viagem com o CaronaChat!";
    }

    return (
      "😊 Posso ajudar você a escolher uma carona!\n\n" +
      "Pergunte pelos horários ou escreva, por exemplo: " +
      "“Quero confirmar a carona das 07h10”."
    );
  };

  // Carrega as mensagens existentes.
  const loadMessages = useCallback(async () => {
    if (!supabaseIsConfigured) {
      setNotice(
        "Configure as credenciais do Supabase em mobile/.env para ativar o chat."
      );
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("ride_id", rideId)
      .order("created_at", { ascending: true });

    if (error) {
      setNotice(
        "Não foi possível carregar as mensagens. Confira a configuração do Supabase."
      );
    } else {
      setMessages((data ?? []) as Message[]);
    }

    setLoading(false);
  }, [rideId]);

  // Atualiza o chat em tempo real.
  useEffect(() => {
    loadMessages();

    if (!supabaseIsConfigured) return;

    const channel = supabase.channel(`ride-${rideId}`, {
      config: { presence: { key: currentUser.id } },
    });

    channel
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `ride_id=eq.${rideId}`,
        },
        (payload) => {
          const incoming = payload.new as Message;

          setMessages((old) =>
            old.some((m) => m.id === incoming.id)
              ? old
              : [...old, incoming]
          );
        }
      )
      .on("presence", { event: "sync" }, () => {
        setOnlineUsers(channel.presenceState() as Record<string, any>);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            name: currentUser.name,
            at: new Date().toISOString(),
          });
        }
      });

    const appStateSub = AppState.addEventListener(
      "change",
      async (state) => {
        if (state === "active") {
          await channel.track({
            name: currentUser.name,
            at: new Date().toISOString(),
          });
        }
      }
    );

    return () => {
      appStateSub.remove();
      supabase.removeChannel(channel);
    };
  }, [rideId, loadMessages]);

  // Envia a mensagem e registra a resposta automática.
  const sendMessage = async () => {
    const text = inputText.trim();

    if (!text || sending) return;

    if (!supabaseIsConfigured) {
      setNotice("Configure o Supabase para enviar mensagens.");
      return;
    }

    setSending(true);
    setNotice("");

    const { error } = await supabase.from("messages").insert({
      ride_id: rideId,
      sender_id: currentUser.id,
      sender_name: currentUser.name,
      text,
    });

    if (error) {
      setNotice(
        "Mensagem não enviada. Confira a conexão e as políticas do Supabase."
      );
      setSending(false);
      return;
    }

    setInputText("");
    setSending(false);

    setTimeout(async () => {
      const reply = getAutomaticReply(text);

      const { error: replyError } = await supabase.from("messages").insert({
        ride_id: rideId,
        sender_id: "caronachat-bot",
        sender_name: "CaronaChat 🤖",
        text: reply,
      });

      if (replyError) {
        setNotice(
          "Sua mensagem foi enviada, mas não consegui registrar a resposta automática."
        );
      }
    }, 800);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Sala da carona</Text>

        <Text numberOfLines={2} style={styles.subtitle}>
          {String(title ?? "Conversa para combinar a carona")}
        </Text>

        <Text style={styles.online}>
          ● {Object.keys(onlineUsers).length} pessoa(s) conectada(s)
        </Text>

        {motorista ? (
          <Text style={styles.driver}>
            Motorista: {String(motorista)}
          </Text>
        ) : null}
      </View>

      {!!notice && <Text style={styles.notice}>{notice}</Text>}

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={8}
      >
        {loading ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            style={styles.flex}
            contentContainerStyle={styles.messages}
            data={messages}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.emptyTitle}>Comece a conversa 👋</Text>
                <Text style={styles.emptyText}>
                  Pergunte sobre horários, vagas ou pontos de encontro.
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={[
                  styles.bubble,
                  item.sender_id === currentUser.id && styles.myBubble,
                  item.sender_id === "caronachat-bot" && styles.botBubble,
                ]}
              >
                <Text style={styles.sender}>{item.sender_name}</Text>
                <Text style={styles.message}>{item.text}</Text>
                <Text style={styles.time}>
                  {new Date(item.created_at).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            )}
          />
        )}

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Pergunte sobre sua carona..."
            multiline
            maxLength={1000}
          />

          <TouchableOpacity
            style={[styles.send, sending && { opacity: 0.5 }]}
            onPress={sendMessage}
            disabled={sending}
          >
            <Text style={styles.sendText}>
              {sending ? "..." : "Enviar"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f5f7fb" },
  flex: { flex: 1 },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
  },
  back: {
    color: "#2563eb",
    fontWeight: "700",
    marginBottom: 9,
    fontSize: 14,
  },
  title: { color: "#0f172a", fontSize: 21, fontWeight: "800" },
  subtitle: {
    color: "#475569",
    marginTop: 5,
    fontSize: 13,
    lineHeight: 19,
  },
  online: {
    color: "#16a34a",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "700",
  },
  driver: { color: "#64748b", fontSize: 12, marginTop: 4 },
  notice: {
    color: "#92400e",
    backgroundColor: "#fef3c7",
    padding: 10,
    fontSize: 12,
  },
  messages: { padding: 14, flexGrow: 1, justifyContent: "flex-end" },
  bubble: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    padding: 11,
    borderRadius: 13,
    marginBottom: 9,
    maxWidth: "86%",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#dbeafe",
    borderColor: "#bfdbfe",
  },
  botBubble: {
    backgroundColor: "#f0fdf4",
    borderColor: "#bbf7d0",
  },
  sender: {
    color: "#1d4ed8",
    fontWeight: "800",
    fontSize: 11,
    marginBottom: 3,
  },
  message: { color: "#1e293b", fontSize: 15, lineHeight: 21 },
  time: {
    color: "#64748b",
    fontSize: 10,
    textAlign: "right",
    marginTop: 5,
  },
  empty: { alignItems: "center", padding: 25, marginBottom: 20 },
  emptyTitle: { color: "#0f172a", fontSize: 17, fontWeight: "800" },
  emptyText: {
    textAlign: "center",
    color: "#64748b",
    lineHeight: 20,
    marginTop: 7,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e2e8f0",
  },
  input: {
    flex: 1,
    maxHeight: 110,
    minHeight: 44,
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 10,
    color: "#0f172a",
  },
  send: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 15,
    minHeight: 44,
    justifyContent: "center",
    borderRadius: 12,
  },
  sendText: { color: "#fff", fontWeight: "800" },
});