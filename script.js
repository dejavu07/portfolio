
        function closeTab() {
        window.close()
        }
        function minimizeTab() {
            var element = document.getElementById("linux-wrapper");
            if (element.style.display === "none") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
            location.reload()
            
        }
        var typed = new Typed('#element', {
        strings: [
            `<span class="First" style="margin-left: 5px;">GNU bash, version 03.28.2001(1)-release(2025)</span><br>
            <span class="intro"> Hi, Welcome to my simple portfolio. <br><p class="help">Type <span class="text-purple">help</span> for a list of commands to know about me.</p>`
        ],
        typeSpeed: 10
        });

        const terminal = document.getElementById("terminal");
        const input = document.getElementById("commandInput");

        const responses = {
        help: `<h class="help-format">About Contact Projects Links Skills Cv Clear Sudo `,

        about: `<br><h class="about-format">I'm Jestian D. Alcasabas, an Electronics Engineering graduate with hands-on experience in embedded systems, automation, and <span style="margin-left: 5px;">programming. Skilled in microcontrollers (Arduino, Raspberry Pi, ESP32), C++, Python, and IoT.</span> Passionate about tech, <span style="margin-left: 5px;">innovation, and smart solutions.</span>
            <br> <br> <span style="margin-left: 5px;">Birthdate: March 28, 2001</span><br> <br><span style="margin-left: 5px;">College: Polytechnic University of the Philippines Sta. Mesa, Manila</span><br><br><span style="margin-left: 5px;">Degree: Bachelor of Science in Electronics Engineering </span><br><br><span style="margin-left: 5px;">Hobbies:  Reading, Playing online-games, playing basketball</span></h>`,

        contact: `<h class="contact-format">Email: jestianalcasabas@gmail.com<br> <span style="margin-left: 5px;">Phone: +63-966-335-4499</span>`,

        projects: `<h class="project-format"><span style="margin-left: 5px;">1. Design and Evaluation of a Portable Heart Monitoring System with ANN Algorithm for Early Arrhythmia Recognition Among <span style="margin-left: 5px;">Traffic Enforcement Personnel.</span> <a href="https://github.com/dejavu07/casptone-project" target="_blank" style="color: #3465A4; font-size: large; margin-left: 10px; display: inline-block;"> Project-Link</a></span> <br><br>
                <span style="margin-left: 5px;">2. Enhancing Recycling Efficiency: A YOLOv8- Powered System for Automated Aluminum and Tin Can Sorting Using Robotic <span style="margin-left: 5px;">Gripper.</span> <a href="https://github.com/dejavu07/project-yolov8" target="_blank" style="color: #3465A4; font-size: large; margin-left: 10px; display: inline-block;"> Project-Link</a></span> <br><br>
                <span style="margin-left: 5px;">3. Automated Waste Segregation of Opaque Plastic, Transparent Plastic, and Metal using Arduino and Sensors. <a href="https://github.com/dejavu07/project-wastesegregator" target="_blank" style="color: #3465A4; font-size: large; margin-left: 10px; display: inline-block;"> Project-Link</a></span></h>`,

        skills: `<h class="skill-format"><span style="color: #3465A4; font-weight: bold;"> Technical Skills: </span> SDLC & STLC Concepts (Waterfall, Agile, V-Model, DevOps), PDCA cycle, Artificial Intelligence, Machine <span style="margin-left: 5px;">Learning, Deep Learning.</span><br>
                <span style="color: #3465A4; font-weight: bold; margin-left: 5px;">Programming Languages: </span>Python, C++, Html, CSS, Javascript, Git, SQL. <br>
                <span style="color: #3465A4; font-weight: bold; margin-left: 5px;">Software: </span>Microsoft Office, Google Suite, AutoCAD, Blender3D, SketchUp, Autodesk Fusion. <br>
                <span style="color: #3465A4; font-weight: bold; margin-left: 5px;">Hardware: </span>Microcontrollers, Sensors, Testing, Assembling, PLC, Automation. <br>
                <span style="color: #3465A4; font-weight: bold; margin-left: 5px;">Soft Skills: </span>Attention to details, Problem-Solving, Critical thinking, Time management, and Able to understand <span style="margin-left: 5px;">quickly.</span></h>`,

        cv: `<a href="cv.pdf" target="_blank" style="color: #3465A4; font-size: large; margin-left: 5px; display: inline-block;">Download CV (PDF)</a>`,

        clear: "clear",

        sudo: `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="sudo-format" target="_blank"  style="color: #3465A4; margin-left: 5px;"> Click to play Sudo Game </a>`,

        hasbi: `<a href="happypill.jpg" class="sudo-format" target="_blank" style="color: #3465A4; margin-left: 5px; font-size: large;"> My Happy Pill</a>`,

        links: `<a href="https://github.com/dejavu07" target="_blank" style="color: #3465A4; font-size: large; margin-left: 5px; display: inline-block;"> Github</a><a href="https://www.linkedin.com/in/jestianalcasabas/" target="_blank" style="color: #3465A4; font-size: large; margin-left: 10px; display: inline-block;"> Linkedin </a><a href="https://bold.pro/my/jestian-alcasabas-250418083927" target="_blank" style="color: #3465A4; font-size: large; margin-left: 10px; display: inline-block;"> Bold-Profile</a></h>`
        };

        input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const command = input.value.trim().toLowerCase();
            const promptText = `<div class="prompt">@jestian-alcasabas/portfolio:~$ ${command}</div>`;
            
            if (command === "clear") {
            terminal.innerHTML = "";
            } else if (responses[command]) {
            terminal.innerHTML += promptText + `<div>${responses[command]}</div>`;
            } else {
            terminal.innerHTML += promptText + `<div>Command not found: ${command}</div>`;
            }

            terminal.scrollTop = terminal.scrollHeight;
            input.value = "";
        }
        });
