$(document).ready(function() {
    $("#formComentario").validate({
      rules: {
        password: {
          required: true,
          minlength: 6
        },
        confirmPassword: {
          required: true,
          equalTo: "#password"
        }
      },
      messages: {
        password: {
          required: "Este campo é obrigatório.",
          minlength: "A senha deve ter pelo menos 6 caracteres."
        },
        confirmPassword: {
          required: "Este campo é obrigatório.",
          equalTo: "As senhas não coincidem."
        }
      }
    });
  });
  