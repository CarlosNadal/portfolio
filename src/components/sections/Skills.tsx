import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Defensive Security",
      icon: "🛡️",
      skills: [
        { 
          name: "SIEM Operations", 
          proof: [
            "Implemented Wazuh SIEM in home lab",
            "Analyzed 100+ alerts in Splunk during Holberton projects"
          ],
          tools: ["Wazuh", "Splunk", "ELK"]
        },
        { 
          name: "Incident Response", 
          proof: [
            "Handled simulated breaches in Holberton SOC exercises",
            "Documented forensic process for malware analysis"
          ],
          tools: ["Autopsy", "Volatility", "SIFT"]
        }
      ]
    },
    {
      title: "Offensive Security",
      icon: "⚔️",
      skills: [
        { 
          name: "Penetration Testing", 
          proof: [
            "Completed 50+ Hack The Box challenges",
            "Exploited OWASP Top 10 in DVWA"
          ],
          tools: ["Burp Suite", "Metasploit", "Nmap"]
        }
      ]
    },
    {
      title: "Technical Foundations",
      icon: "🖥️",
      skills: [
        { 
          name: "Network Security", 
          proof: [
            "Built segmented test network with pfSense",
            "Packet analysis with Wireshark (50+ captures)"
          ],
          tools: ["Wireshark", "pfSense", "Cisco Packet Tracer"]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Validated Cybersecurity Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl mb-6 flex items-center">
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <h4 className="font-medium mb-2">{skill.name}</h4>
                    
                    <div className="mb-3">
                      <div className="text-sm font-semibold mb-1">Demonstrated By:</div>
                      <ul className="space-y-2">
                        {skill.proof.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold mb-1">Tools Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, i) => (
                          <span 
                            key={i} 
                            className="bg-secondary px-3 py-1 rounded-full text-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;