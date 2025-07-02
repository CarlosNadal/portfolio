import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Fundamentals",
      icon: "🧰",
      skills: [
        {
          name: "Linux Security & Reconnaissance",
          proof: [
            "Learned passive and active recon using Nmap, Wireshark, Burp Suite",
            "Built and configured secure Linux environments"
          ],
          tools: ["Nmap", "Wireshark", "Burp Suite", "Linux"]
        },
        {
          name: "Cryptography & OWASP Top 10",
          proof: [
            "Hands‑on OWASP Top 10 web security labs",
            "Introduced to basic cryptography concepts"
          ],
          tools: ["OWASP Top 10", "Basic Crypto"]
        }
      ]
    },
    {
      title: "Advanced Techniques",
      icon: "⚔️🛡️",
      skills: [
        {
          name: "Offensive & Defensive Active Directory",
          proof: [
            "Performed command injection and advanced Nmap scans",
            "Hands‑on AD attack and defense exercises"
          ],
          tools: ["Advanced Nmap", "Command Injection", "Active Directory"]
        },
        {
          name: "Forensic Analysis",
          proof: [
            "Completed practical forensic projects in controlled labs"
          ],
          tools: ["Forensic Methodologies"]
        }
      ]
    },
    {
      title: "Expert Level",
      icon: "🚀",
      skills: [
        {
          name: "Privilege Escalation, Malware & Mobile Security",
          proof: [
            "Finished privilege escalation exercises",
            "Analyzed malware and implemented mobile security practices"
          ],
          tools: ["Privilege Escalation", "Malware Analysis", "Mobile Security"]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Holberton Cybersecurity Specialization Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl mb-6 flex items-center">
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="group">
                    <h4 className="font-medium mb-2">{skill.name}</h4>
                    <div className="mb-3">
                      <div className="text-sm font-semibold mb-1">Demonstrated By:</div>
                      <ul className="space-y-2">
                        {skill.proof.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-primary mr-2">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">Tools Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, i) => (
                          <span key={i} className="bg-secondary px-3 py-1 rounded-full text-xs">{tool}</span>
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
