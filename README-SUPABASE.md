# Blood Rose — catálogo + painel administrativo + Supabase

Esta versão já está configurada para usar o projeto Supabase informado e inclui um painel administrativo no `admin.html`.

## 1. Banco de dados

No Supabase → SQL Editor, execute `schema.sql`.

O schema cria:
- `public.products`
- `public.admin_users`
- políticas RLS
- bucket público `products` para imagens

## 2. Administrador

O usuário administrador é:

`dielle.martins@aluno.edu.pi.gov.br`

Depois de criar esse usuário em Authentication → Users, execute `setup-admin.sql` no SQL Editor. O arquivo vincula o usuário à tabela `admin_users`.

## 3. Configuração do site

`supabase-config.js` já contém:

- Project URL: `https://xuwfbwzbklmurcfveqsm.supabase.co`
- chave pública publishable/anon fornecida para o projeto

Nunca use a `service_role` key no frontend.

## 4. Painel

Abra `admin.html`. O e-mail do administrador já aparece preenchido no login.

No painel é possível:
- adicionar produto;
- editar produto;
- excluir produto;
- escolher categoria;
- definir preço e preço antigo;
- adicionar etiqueta;
- escrever descrição;
- escolher tamanhos;
- selecionar imagem do computador;
- publicar ou deixar como rascunho;
- definir a ordem da vitrine.

As imagens novas são enviadas ao bucket `products` e a URL pública é salva em `products.image_url`.

## 5. Loja

A loja consulta `public.products` automaticamente. Visitantes veem apenas produtos ativos por causa das políticas RLS. Se o Supabase estiver indisponível ou ainda não configurado, o site mantém os produtos locais como fallback.

## 6. Publicação

Mantenha `index.html`, `admin.html`, `script.js`, `style.css`, `supabase-config.js` e a pasta `img/` juntos ao publicar o site.
