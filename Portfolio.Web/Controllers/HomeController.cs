using Microsoft.AspNetCore.Mvc;
using Portfolio.Web.Models;

namespace Portfolio.Web.Controllers;

public class HomeController(ILogger<HomeController> logger) : Controller
{
    private const string ContactSuccessKey = "ContactSuccess";

    [HttpGet("/")]
    public IActionResult Index() =>
        View(new HomeViewModel { ContactSuccess = TempData[ContactSuccessKey] is true });

    // Depois de um envio inválido o URL fica /contacto; ao atualizar a página volta-se ao formulário.
    [HttpGet("/contacto")]
    public IActionResult ContactRedirect() => Redirect(Url.Action(nameof(Index))! + "#contacto");

    [HttpPost("/contacto")]
    [ValidateAntiForgeryToken]
    public IActionResult Contact([Bind(Prefix = nameof(HomeViewModel.Contact))] ContactMessage contact)
    {
        if (!ModelState.IsValid)
        {
            ViewData["ScrollTo"] = "contacto";
            return View(nameof(Index), new HomeViewModel { Contact = contact });
        }

        // O formulário ainda não envia email. Só se regista o assunto (sem dados pessoais).
        logger.LogInformation("Mensagem de contacto validada. Assunto: {Subject}", contact.Subject);

        TempData[ContactSuccessKey] = true;
        return Redirect(Url.Action(nameof(Index))! + "#contacto");
    }

    [Route("/erro")]
    public IActionResult Error(int? codigo)
    {
        Response.StatusCode = codigo ?? 500;
        return View(codigo ?? 500);
    }
}
