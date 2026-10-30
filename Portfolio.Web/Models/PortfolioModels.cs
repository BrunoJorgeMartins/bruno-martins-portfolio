namespace Portfolio.Web.Models;

public record Project(
    string Id,
    string Number,
    string Title,
    string ShortTitle,
    string Status,
    IReadOnlyList<string> Categories,
    string Problem,
    string Solution,
    string Role,
    IReadOnlyList<string> Technologies,
    IReadOnlyList<string> Features,
    IReadOnlyList<string> Challenges,
    string NextStep);

public record SkillGroup(string Number, string Label, string Title, IReadOnlyList<string> Items);

public record ProcessStep(string Number, string Title, string Description);

public record Experience(
    string Date,
    string Company,
    string Role,
    string Description,
    string Icon,
    IReadOnlyList<string> Tags,
    bool IsCurrent = false);

public record NavItem(string Label, string Href);
