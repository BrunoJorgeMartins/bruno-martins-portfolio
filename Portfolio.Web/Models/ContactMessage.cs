using System.ComponentModel.DataAnnotations;

namespace Portfolio.Web.Models;

public class ContactMessage
{
    [Required, StringLength(120)]
    public string Name { get; set; } = "";

    [Required, EmailAddress, StringLength(200)]
    public string Email { get; set; } = "";

    [Required, StringLength(150)]
    public string Subject { get; set; } = "";

    [Required, StringLength(4000)]
    public string Message { get; set; } = "";
}
