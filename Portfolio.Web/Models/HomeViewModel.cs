using Portfolio.Web.Data;

namespace Portfolio.Web.Models;

public class HomeViewModel
{
    public IReadOnlyList<NavItem> Nav => PortfolioData.Nav;
    public IReadOnlyList<string> Filters => PortfolioData.Filters;
    public IReadOnlyList<Project> Projects => PortfolioData.Projects;
    public IReadOnlyList<SkillGroup> SkillGroups => PortfolioData.SkillGroups;
    public IReadOnlyList<Experience> Experiences => PortfolioData.Experiences;
    public IReadOnlyList<ProcessStep> ProcessSteps => PortfolioData.ProcessSteps;

    public ContactMessage Contact { get; set; } = new();
    public bool ContactSuccess { get; set; }
}
