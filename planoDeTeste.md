# Plano de Teste - Shortz-App

## 1. Identificação
- **Projeto:** Shortz-App
- **Versão:** 1.0 (Módulo de Usuários e Autenticação)
- **Grupo:** Ana Beatriz, Pedro Elizeu 
- **Data de Criação:** 12/02/2026
- **Objeitvo:** 

## 2. Escopo
### O que SERÁ testado
- Cadastro de usuário (validação de e-mail, senha e usuário duplicado)
- Login e logout de usuário
- Recuperação de senha por e-mail
- Upload de vídeos (validação de tamanho e formato de arquivo)
- Publicação de vídeos na plataforma
- Sistema de curtidas em vídeos
- Sistema de notificações ao usuário

## 3. Estratégia
### Níveis de Teste
- **Unitários:** Testam funções individuais do sistema, como validações de cadastro, upload de vídeo e contagem de curtidas.
- **Integração:** Testam a comunicação entre os módulos da aplicação através das rotas da API, como cadastro, login, upload e notificações.

# 4. Riscos Identificados

| ID   | Descrição de Risco                                         | Categoria     | Probabilidade | Impacto | Prioridade |
| ---- | ---------------------------------------------------------- | ------------- | ------------- | ------- | ---------- |
| R-01 | Tamanho de arquivo maior que o permitido                   | Funcional     | Alta          | Médio   | Alta       |
| R-02 | Falha ao aparecer o vídeo após públicado                   | Fucional      | Médio         | Crítica | Crítica    |
| R-03 | Mostrar número de curtidas errado                          | Não Funcional | Médio         | Baixo   | Baixa      |
| R-04 | Senha fraca ser aceita no cadastro                         | Não Funcional | Alta          | Crítico | Crítica    |
| R-05 | Cadastrar e-mail e/ou usuário já existente                 | Funcional     | Médio         | Alto    | Alta       |
| R-06 | Notificação não chegar ao usuário                          | Não Funcional | Média         | Médio   | Média      |
| R-07 | Não chegar o e-mail de recuperação de senha                | Funcional     | Médio         | Alto    | Alta       |
| R-08 | Sistema duplicar vídeo publicado                           | Funcional     | Baixo         | Alto    | Média      |
| R-09 | Sistema permitir upload de vídeo com formato não suportado | Funcional     | Médio         | Médio   | Média      |
| R-10 | Usuário não conseguir fazer logout da conta                | Funcional     | Baixo         | Médio   |            |

