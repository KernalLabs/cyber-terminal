document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded"); // Debugging line to ensure script is running
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    const commands = {
        '/help': 'Available commands: /about, /journey, /projects, /contact, /blog, /clear',
        '/about': 'Hi, I\'m Mike, also known as "Kernel Labs" on GitHub. I am an aspiring cybersecurity professional passionate about learning and exploring the field of digital security. My journey in cybersecurity began with an interest in ethical hacking and has grown into a full-fledged pursuit of knowledge and skills.',
        '/journey': 'Starting from learning basic programming and networking, I have delved into various aspects of cybersecurity, including vulnerability assessment, penetration testing, and digital forensics. My projects reflect my growth and the practical application of my skills.',
        '/projects': '1. <a href="https://github.com/KernelLabs/port-scanner" target="_blank">Port Scanner</a>: A simple port scanner tool to identify open ports on a network.',
        '/contact': 'To contact me, please <a href="mailto:your-email@example.com">email me</a> or type "/form" to reveal a contact form.',
        '/blog': 'Check out my blog posts:<br>1. <a href="https://medium.com/@yourusername/post1" target="_blank">Post 1</a><br>2. <a href="https://substack.com/@yourusername/post2" target="_blank">Post 2</a>',
        '/form': '<form action="mailto:your-email@example.com" method="post" enctype="text/plain"><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="message">Message:</label><textarea id="message" name="message"></textarea><br><input type="submit" value="Send"><button type="button" onclick="hideForm()">Cancel</button></form>',
    };

    function displayWelcomeMessage() {
        console.log("Displaying welcome message"); // Debugging line to ensure function is called
        const welcomeMessage = `
            <div>Welcome to KernelLabs Cyber Terminal!</div>
            <div>Type /help to see the list of available commands.</div>
            <div>Quick Tips:</div>
            <ul>
                <li>Type /about to learn more about me.</li>
                <li>Type /journey to read about my journey in cybersecurity.</li>
                <li>Type /projects to see my projects.</li>
                <li>Type /contact to find out how to contact me.</li>
                <li>Type /blog to read my blog posts.</li>
                <li>Type /clear to clear the screen.</li>
            </ul>
        `;
        output.innerHTML = welcomeMessage;
    }

    displayWelcomeMessage();

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            if (command) {
                processCommand(command);
                input.value = '';
            }
        }
    });

    function processCommand(command) {
        if (command === '/clear') {
            output.innerHTML = '';
            displayWelcomeMessage();
        } else if (commands[command]) {
            output.innerHTML += `<div>${commands[command]}</div>`;
            if (command === '/form') {
                document.querySelector('form').style.display = 'block';
            }
        } else {
            output.innerHTML += `<div>Unknown command: ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    }

    window.hideForm = function() {
        const form = document.querySelector('form');
        if (form) {
            form.style.display = 'none';
        }
    }
});
