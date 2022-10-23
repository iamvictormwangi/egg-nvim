import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
	props: {
		name: 'Egg Neovim',
    motto: 'Makes you feel eggy',
    github: 'https://github.com/vicktter',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    features: [
      {
        id: 0,
        title: 'LSP',
        img: 'htps://',
        msg: 'comes with lsp configured out the box with plugins such as lspconfig to help you when working with lsp'
      },
      {
        id: 0,
        title: 'Syntax Highlighting',
        img: 'htps://',
        msg: 'It has really awesome syntax highlighting through lsp and tree-sitter support'
      },
      {
        id: 1,
        title: 'Auto Completion',
        img: 'htps://',
        msg: 'Auto completion is handled by cmp-nvim'
      },
      {
        id: 1,
        title: 'Snippets',
        img: 'htps://',
        msg: 'Has snippets from vscode plus custom added ones'
      },
      {
        id: 1,
        title: 'Web IDE',
        img: 'htps://',
        msg: 'Supports web development out of the box. Comes shipped with plugins such as emmet and supports auto completion for HTML, CSS and JavaScript'
      },
      {
        id: 2,
        title: 'Error Reporting',
        img: 'htps://',
        msg: 'Because of its awesome lsp support, error reporting is top notch as you get errors as soon as you leave insert mode'
      },
      {
        id: 3,
        title: 'File Explorer',
        img: 'htps://',
        msg: 'Uses NvimTree for awesome file tree experience with awesome key bindings'
      },
      {
        id: 4,
        title: 'Fuzzy File Search',
        img: 'htps://',
        msg: 'Has keybindings to toggle FZF to fuzzy search files for files in a project'
      },
      {
        id: 5,
        title: 'Auto Close',
        img: 'htps://',
        msg: 'When you type a single quote it will automatically close it, this also happens for html tags'
      },
      {
        id: 6,
        title: 'Integrated Terminal',
        img: 'htps://',
        msg: 'Comes with an integrated with opens in the directory you are working on, so that you can easily run commands in the background while still viewing your code'
      },
      {
        id: 6,
        title: 'Themes',
        img: 'htps://',
        msg: 'Comes with 5 different themes, tokyonight, gruvbox, molokai, mopkai, and solarized'
      },
    ],
    installation_steps: [
      {
        id: 1,
        class: 'step-1',
        title: 'Clone the project',
        code: 'git clone https://vicktter/egg-nvim/ ~/.config/nvim'
      },
      {
        id: 2,
        class: 'step-2',
        title: 'Do something else the project',
        code: 'git clone https://vicktter/egg-nvim/ ~/.config/nvim'
      },
    ],
    mappings: [
      {
        id: 0,
        keys: 'c-o',
        command: 'Emmet Trigger',
        mode: 'Insert'
      },
      {
        id: 1,
        keys: 'jk',
        command: 'Escape Insert Mode',
        mode: 'Insert'
      },
      {
        id: 2,
        keys: '<leader>e',
        command: 'Toggle Nerd Tree',
        mode: 'Normal'
      },
      {
        id: 3,
        keys: '<leader>t',
        command: 'Toggle Terminal',
        mode: 'Normal'
      },
      {
        id: 4,
        keys: '<leader>f',
        command: 'Toggle FZF',
        mode: 'Normal'
      },
      {
        id: 5,
        keys: '<leader>w',
        command: 'Save File',
        mode: 'Normal'
      },
      {
        id: 6,
        keys: '<leader>q',
        command: 'Quit',
        mode: 'Normal'
      },
      {
        id: 7,
        keys: '<leader>n',
        command: 'Switch Buffer',
        mode: 'Normal'
      },
      {
        id: 8,
        keys: '<leader>l',
        command: 'Go to Next Buffer',
        mode: 'Normal'
      },
      {
        id: 9,
        keys: '<leader>h',
        command: 'Go to Previous Buffer',
        mode: 'Normal'
      },
      {
        id: 10,
        keys: 'u',
        command: 'undo!',
        mode: 'Normal'
      },
      {
        id: 11,
        keys: 's',
        command: 'Repeat',
        mode: 'Normal'
      },
      {
        id: 12,
        keys: '<leader>p',
        command: 'Color Picker',
        mode: 'Normal'
      },
      {
        id: 12,
        keys: 'c-u',
        command: 'Smooth Scroll Up',
        mode: 'Normal'
      },
      {
        id: 13,
        keys: 'c-p',
        command: 'Smooth Scroll Down',
        mode: 'Normal'
      },
      {
        id: 14,
        keys: '<',
        command: 'Indent Left',
        mode: 'Visual'
      },
      {
        id: 15,
        keys: '>',
        command: 'Indent Right',
        mode: 'Visual'
      },
    ]
	}
})

export default app
