# Checklist — Full-stack e gestão de ficheiros

- [x] Converter o projeto de portfólio para a arquitetura `web-db-user`.
- [x] Rever o guia de integração de armazenamento de ficheiros.
- [x] Criar a tabela de metadados dos ficheiros, sem guardar bytes na base de dados.
- [x] Criar procedimentos protegidos para solicitar upload, listar e remover ficheiros do proprietário.
- [x] Aplicar a migração da base de dados e validar as permissões.
- [x] Criar a página autenticada de Biblioteca de Ficheiros para currículo, screenshots e anexos de projetos.
- [x] Ligar a biblioteca ao portfólio com uma entrada de gestão discreta.
- [ ] Fazer um teste manual com um ficheiro real para confirmar upload, listagem, cópia de URL e remoção.
- [x] Confirmar com teste automatizado que utilizadores sem função de administrador não acedem às operações da biblioteca.
- [x] Verificar manualmente o acesso autenticado de administrador à Biblioteca de Ficheiros.
- [ ] Investigar o erro 403 no início de sessão da Biblioteca de Ficheiros.
- [ ] Corrigir o fluxo de autenticação e validar o acesso privado.
- [ ] Salvar e publicar a versão atualizada.
