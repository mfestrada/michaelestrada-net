import React, { useEffect } from 'react';
import { about } from './files/about.txt.js';
import { resume } from './files/resume.txt.js';

const TerminalWrapper = () => {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import('xterm');
      const { FitAddon } = await import('xterm-addon-fit');
      const baseTheme = {
        foreground: '#F8F8F8',
        background: '#000000',
        selection: '#5DA5D533',
        black: '#1E1E1D',
        brightBlack: '#262625',
        red: '#CE5C5C',
        brightRed: '#FF7272',
        green: '#5BCC5B',
        brightGreen: '#72FF72',
        yellow: '#CCCC5B',
        brightYellow: '#FFFF72',
        blue: '#5D5DD3',
        brightBlue: '#7279FF',
        magenta: '#BC5ED1',
        brightMagenta: '#E572FF',
        cyan: '#5DA5D5',
        brightCyan: '#72F0FF',
        white: '#F8F8F8',
        brightWhite: '#FFFFFF'
      };
      const terminal = new Terminal({
        theme: baseTheme,
        cursorBlink: true,
        convertEol: false,
        scrollback: 9000
      });
      const fitAddon = new FitAddon();
      terminal.loadAddon(fitAddon);
      terminal.open(document.querySelector('#terminal'));

      fitAddon.activate(terminal);
      fitAddon.fit();
      window.addEventListener('resize', (event) => {
        fitAddon.fit();
      });

      const promptString = 'hello@michaelestrada-net:~$ ';
      terminal.write('Type "help" to see available commands\r\n');
      terminal.write(promptString);

      let command = '';
      const commands = {
        cat: {
          f: (data) => {
            if (data === 'about.txt') {
              terminal.write(about);
            } else if (data === 'resume.txt') {
              terminal.write(resume);
            } else {
              terminal.write(`cat: ${data}: No such file or directory\r\n`);
            }
            prompt(terminal);
          },
          description: 'Concatenate and print files'
        },
        clear: {
          f: (data) => {
            terminal.reset();
            terminal.write(promptString);
          },
          description: 'Clear the terminal screen'
        },
        help: {
          f: (data) => {
            terminal.writeln([
              ...Object.keys(commands).map(e => `  ${e.padEnd(10)} ${commands[e].description}`)
            ].join('\r\n'));
            prompt(terminal);
          },
          description: 'Prints this help message'
        },
        ls: {
          f: (data) => {
            terminal.writeln(['about.txt', 'resume.txt'].join('  '));
            prompt(terminal);
          },
          description: 'Lists directory contents'
        }
      }
      const prompt = (terminal) => {
        terminal.write('\r\n' + promptString);
        command = '';
      }
      const runCommand = (terminal, text) => {
        const command = text.trim().split(' ')[0],
              args = text.trim().split(' ')[1];
        if (command.length > 0) {
          terminal.writeln('');
          if (command in commands) {
            let data;
            if (command === 'cat') data = args;
            commands[command].f(data);
            return;
          }
          terminal.writeln(`${command}: command not found`);
        }
        prompt(terminal);
      }

      terminal.onData(e => {
        switch (e) {
          case '\u000C':
            terminal.reset();
            terminal.write(promptString + command);
            break;
          case '\u0003':
            terminal.write('^C');
            prompt(terminal);
            break;
          case '\r':
            runCommand(terminal, command);
            command = '';
            break;
          case '\u007F':
            if (terminal._core.buffer.x > 2) {
              terminal.write('\b \b');
              if (command.length > 0) {
                command = command.substring(0, command.length - 1);
              }
            }
            break;
          default:
            if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
              command += e;
              terminal.write(e);
            }
        }
      });

    }

    initTerminal();
  }, []);

  return <div id="terminal" style={{minHeight: "100vh !important"}}></div>;
};

export default TerminalWrapper;
