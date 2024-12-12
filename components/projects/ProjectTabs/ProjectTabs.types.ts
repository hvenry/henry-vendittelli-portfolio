export interface Tab {
  title: string;
  bodyTitle?: string;
  githubLink?: string;
  youtubeLink?: string;
  technologies?: string[];
  description: string;
  imageName?: string;
}

export interface ProjectTabsProps {
  tabs: Tab[];
  activeTabClassName?: string;
  tabClassName?: string;
  activeTab: string;
}
