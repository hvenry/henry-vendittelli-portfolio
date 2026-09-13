---
title: "Dotfiles"
bodyTitle: "Cross-Platform Dotfiles"
summary: "GNU Stow-managed configuration and bootstrap for macOS and Arch Linux, split into shared and platform-specific packages with one-command installs."
technologies:
  - "Bash"
  - "Lua"
  - "Vim"
  - "Unix"
  - "Git"
github: "https://github.com/hvenry/dotfiles"
image: "dotfiles_project.jpg"
role: "Solo project"
order: 3
---

One repository that provisions two very different machines: a macOS laptop and an Arch Linux + [Hyprland](https://hypr.land/) desktop. [GNU Stow](https://www.gnu.org/software/stow/) symlinks each config into place, so editing a file in the repo edits the live config on whichever machine I'm on.

Every package lives under exactly one platform directory (`shared/`, `macos/`, or `linux/`), so a checkout tells you at a glance what applies where.

## The shared core

These follow me onto every machine. A minimal `server` profile installs just the shell, editor, and multiplexer on headless boxes.

| Tool                                                                                                                                                                                                                                             | Why it's here                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Zsh](https://www.zsh.org/) + [Powerlevel10k](https://github.com/romkatv/powerlevel10k)                                                                                                                                                          | Login shell and prompt, with autosuggestions, syntax highlighting, and a small `darwin`/`linux` branch for platform-specific paths and aliases                                                                                                                                                                                                                        |
| [Neovim](https://neovim.io/)                                                                                                                                                                                                                     | Primary editor. Lua config with [lazy.nvim](https://github.com/folke/lazy.nvim), [Mason](https://github.com/mason-org/mason.nvim)-managed LSP servers, [Telescope](https://github.com/nvim-telescope/telescope.nvim) fuzzy finding, [conform.nvim](https://github.com/stevearc/conform.nvim) formatting, and [copilot.lua](https://github.com/zbirenbaum/copilot.lua) |
| [tmux](https://github.com/tmux/tmux/wiki)                                                                                                                                                                                                        | Session persistence for long-running work. `ctrl+space` prefix, vi copy-mode, and the [tokyo-night](https://github.com/janoamaral/tokyo-night-tmux) status bar                                                                                                                                                                                                        |
| [vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator)                                                                                                                                                                          | The glue that makes `ctrl+hjkl` move between Neovim splits and tmux panes as if they were one thing                                                                                                                                                                                                                                                                   |
| [herdr](https://herdr.dev/)                                                                                                                                                                                                                      | Terminal workspace manager for AI coding agents, keybound to match my tmux muscle memory. tmux still handles general work sessions                                                                                                                                                                                                                                    |
| [Ghostty](https://ghostty.org/)                                                                                                                                                                                                                  | Terminal emulator on both platforms, so one config covers both                                                                                                                                                                                                                                                                                                        |
| [fzf](https://github.com/junegunn/fzf), [zoxide](https://github.com/ajeetdsouza/zoxide), [ripgrep](https://github.com/BurntSushi/ripgrep), [fd](https://github.com/sharkdp/fd), [bat](https://github.com/sharkdp/bat), [eza](https://eza.rocks/) | The search-and-navigate layer everything else leans on                                                                                                                                                                                                                                                                                                                |

## Arch Linux desktop

`linux/bootstrap/` builds a Hyprland desktop from a bare install: pacman packages, an AUR helper, then the configs. The compositor stack is deliberately modular: each piece does one job.

| Component                                                                                                                                                                                         | Purpose                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Hyprland](https://hypr.land/)                                                                                                                                                                    | Wayland tiling compositor, with `hyprpaper`, `hypridle`, `hyprlock`, and `hyprpicker` for wallpaper, idle, lock, and colour picking |
| [Waybar](https://github.com/Alexays/Waybar)                                                                                                                                                       | Status bar, with custom scripts for battery, network, and now-playing                                                               |
| [Rofi](https://github.com/lbonn/rofi)                                                                                                                                                             | Application launcher, extended with entries for network, Bluetooth, and audio control                                               |
| [Mako](https://github.com/emersion/mako)                                                                                                                                                          | Notification daemon, click-to-open and right-click-to-dismiss                                                                       |
| [wlogout](https://github.com/ArtsyMacaw/wlogout) + [ly](https://github.com/fairyglade/ly)                                                                                                         | Power menu and a TTY-based display manager, with no desktop environment underneath                                                  |
| [PipeWire](https://pipewire.org/) + WirePlumber                                                                                                                                                   | Audio, replacing PulseAudio/JACK with one stack                                                                                     |
| [Thunar](https://docs.xfce.org/xfce/thunar/start), [grim](https://sr.ht/~emersion/grim)/[slurp](https://github.com/emersion/slurp), [brightnessctl](https://github.com/Hummer12007/brightnessctl) | File manager, screenshots, and hardware controls                                                                                    |
| GTK, [xsettingsd](https://github.com/derat/xsettingsd), [Nerd Fonts](https://www.nerdfonts.com/)                                                                                                  | Consistent dark theming and fonts across GTK and Qt apps                                                                            |

## macOS

macOS gets a different problem: the window manager is fixed, so the config works with it rather than replacing it.

| Tool                                                  | Purpose                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [AeroSpace](https://github.com/nikitabobko/AeroSpace) | i3-style workspaces driven from a versioned TOML. Configured to float every window, so it manages workspaces only         |
| [Rectangle](https://rectangleapp.com/)                | Handles the actual snapping that AeroSpace deliberately leaves alone. Its bindings live here as an exported JSON snapshot |
| [Homebrew](https://brew.sh/)                          | Installs the shared core plus the casks above                                                                             |

## How the repo is organized

- **Profiles** are plain lists of package names. `install-profile.sh` resolves each name across `shared/`, `macos/`, and `linux/`, then stows it, so `./install-profile.sh --clean macos` sets up a machine in one command.
- **`--clean`** removes conflicting configs first, including symlinks left dangling when the layout changes.
- **Bootstrap** (`linux/bootstrap/`) handles the parts Stow can't: installing packages, enabling services, and configuring NVIDIA when it detects it.

## Background

It started flat, with every package at the repo root, which meant a Mac checkout showed thirteen Hyprland directories it would never use. Splitting by platform made that boundary structural instead of something I had to keep in my head.
