# CaronaChat — projeto inicial pronto para executar

O objetivo do aplicativo é **encontrar e pedir caronas** (por exemplo, casa → campus), e conversar com quem oferece a carona. O projeto tem:
- **mobile/**: aplicativo Expo + React Native;
- **api/**: Next.js usado somente como API;
- **supabase/schema.sql**: tabelas e políticas para mensagens em tempo real.

## 1. Requisitos
- Node.js LTS instalado
- Conta gratuita no Supabase
- Expo Go no celular
- Computador e celular na mesma rede Wi-Fi (para testar a API local)

## 2. Configure o Supabase
1. Crie um projeto em https://supabase.com/
2. Abra **SQL Editor** e execute o conteúdo de `supabase/schema.sql`.
3. Em Project Settings → API, copie a **Project URL** e a chave `anon`/publishable.
4. Copie `mobile/.env.example` para `mobile/.env` e preencha os valores.
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_API_URL`: URL da API Next.js. No celular, use o IP local do computador, por exemplo `http://192.168.1.10:3000`. Não use `localhost` no celular.
5. Para testar rapidamente, as caronas de exemplo são fornecidas pela API. Você pode trocar os dados em `api/app/api/caronas/route.ts`.

> Segurança: use somente a chave pública `anon`/publishable no aplicativo. Nunca coloque a `service_role` no Expo. Este projeto é uma base didática; antes de publicar, implemente autenticação real, validação no servidor e políticas de acesso mais restritas.

## 3. Inicie a API (terminal 1)
```bash
cd api
npm install
npm run dev
```
A API fica em `http://localhost:3000/api/caronas`. Teste no navegador do computador primeiro.

## 4. Inicie o app (terminal 2)
```bash
cd mobile
npm install
npx expo start
```
Escaneie o QR Code com o Expo Go. Confira se `EXPO_PUBLIC_API_URL` aponta para o IP do computador, não `localhost`.

## Como usar
1. Na tela inicial, veja as caronas disponíveis.
2. Toque em **Pedir carona** para abrir a sala daquela carona.
3. Na sala, envie mensagens; elas são salvas no Supabase e chegam em tempo real aos outros clientes.
4. O indicador mostra quantas pessoas estão conectadas à sala.

## Observações
- As caronas iniciais são exemplos estáticos para cumprir a etapa de integração com `GET /api/caronas`.
- O botão “Pedir carona” abre a conversa da carona; ele não envia uma solicitação formal ao motorista ainda.
- O chat de demonstração usa um usuário local de exemplo. Para uso real, adicione login/autenticação e associe cada pedido a um usuário autenticado.
