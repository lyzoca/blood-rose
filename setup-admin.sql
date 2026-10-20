-- BLOOD ROSE — vincular o administrador
-- Execute no Supabase SQL Editor depois de criar o usuário em Authentication > Users.

insert into public.admin_users (user_id)
select id
from auth.users
where email = 'dielle.martins@aluno.edu.pi.gov.br'
on conflict (user_id) do nothing;

-- Conferência
select au.user_id, u.email
from public.admin_users au
join auth.users u on u.id = au.user_id;
