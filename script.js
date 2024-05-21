document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is running"); // Debugging line to ensure script is running
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const riddleAnswer = "keyboard"; // Simple riddle answer for demonstration

    const commands = {
        '/help': 'Available commands: /about, /journey, /projects, /contact, /blog, /clear',
        '/about': 'Hi, I\'m Mike, also known as "Kernel Labs" on GitHub. I am an aspiring cybersecurity professional passionate about learning and exploring the field of digital security. My journey in cybersecurity began with an interest in ethical hacking and has grown into a full-fledged pursuit of knowledge and skills.',
        '/journey': 'Starting from learning basic programming and networking, I have delved into various aspects of cybersecurity, including vulnerability assessment, penetration testing, and digital forensics. My projects reflect my growth and the practical application of my skills.',
        '/projects': '1. <a href="https://github.com/KernelLabs/port-scanner" target="_blank">Port Scanner</a>: A simple port scanner tool to identify open ports on a network.',
        '/contact': `
            <div>
                <p>Contact me via the form below or reach out directly:</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: your-email@example.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername" target="_blank">yourusername</a></p>
            </div>
            <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <input type="submit" value="Send">
                <button type="button" onclick="hideForm()">Cancel</button>
            </form>
        `,
        '/blog': 'Check out my blog posts:<br>1. <a href="https://medium.com/@yourusername/post1" target="_blank">Post 1</a><br>2. <a href="https://substack.com/@yourusername/post2" target="_blank">Post 2</a>',
        '/form': '<form action="mailto:your-email@example.com" method="post" enctype="text/plain"><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="message">Message:</label><textarea id="message" name="message"></textarea><br><input type="submit" value="Send"><button type="button" onclick="hideForm()">Cancel</button></form>',
    };

    function displayRiddle() {
        const riddleMessage = `
            <div class="riddle-message">
                <div>Welcome Traveler, please solve this riddle to prove you're human and gain access:</div>
                <div>What has keys but can't open locks?</div>
            </div>
        `;
        output.innerHTML = riddleMessage;
    }

    function displayMainScreen() {
        const welcomeMessage = `
            <div>Welcome to KernelLabs Cyber Terminal!</div>
            <div class="horizontal-menu">
                <div>Available Commands:</div>
                <div>/about</div>
                <div>/journey</div>
                <div>/projects</div>
                <div>/contact</div>
                <div>/blog</div>
                <div>/clear</div>
            </div>
            <div>Hi, I\'m Mike, also known as "Kernel Labs" on GitHub. I am an aspiring cybersecurity professional passionate about learning and exploring the field of digital security. My journey in cybersecurity began with an interest in ethical hacking and has grown into a full-fledged pursuit of knowledge and skills.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        `;
        output.innerHTML = welcomeMessage;
    }

    function displayCommands() {
        const commandsMessage = `
            <div class="horizontal-menu">
                <div>Available Commands:</div>
                <div>/about</div>
                <div>/journey</div>
                <div>/projects</div>
                <div>/contact</div>
                <div>/blog</div>
                <div>/clear</div>
            </div>
        `;
        return commandsMessage;
    }

    function checkRiddleAnswer(answer) {
        return answer.trim().toLowerCase() === riddleAnswer;
    }

    function processCommand(command) {
        output.innerHTML = displayCommands(); // Clear previous content and display commands
        if (commands[command]) {
            output.innerHTML += `<div>${commands[command]}</div>`;
            if (command === '/form') {
                document.querySelector('form').style.display = 'block';
            }
        } else {
            output.innerHTML += `<div>Unknown command: ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    }

    function init() {
        if (localStorage.getItem('accessGranted') === 'true') {
            displayMainScreen();
        } else {
            displayRiddle();
        }
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            if (localStorage.getItem('accessGranted') !== 'true') {
                if (checkRiddleAnswer(command)) {
                    localStorage.setItem('accessGranted', 'true');
                    output.innerHTML += `<div class="access-message">Access Granted</div>`;
                    setTimeout(displayMainScreen, 1000);
                } else {
                    output.innerHTML += `<div class="access-message">Access Denied. Please try again.</div>`;
                }
            } else if (command) {
                processCommand(command);
            }
            input.value = '';
        }
    });

    window.hideForm = function() {
        const form = document.querySelector('form');
        if (form) {
            form.style.display = 'none';
        }
    }

    init();
});
