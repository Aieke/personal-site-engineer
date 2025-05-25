import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Обработка скролла для тени навбара
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Данные проектов
  const projects = [
    {
      title: "Task Management System",
      description:
        "Полный стек веб-приложения с React, Node.js и MongoDB для управления задачами.",
      image: "https://picsum.photos/id/10/600/400 ",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "AI Chatbot",
      description:
        "Чат-бот на базе NLP моделей с поддержкой пользовательских сценариев.",
      image: "https://picsum.photos/id/20/600/400 ",
      tags: ["Python", "NLP", "FastAPI"],
    },
    {
      title: "E-commerce Platform",
      description:
        "Масштабируемая платформа электронной коммерции с интеграцией платежей и системой рекомендаций.",
      image: "https://picsum.photos/id/30/600/400 ",
      tags: ["Next.js", "Stripe", "TailwindCSS"],
    },
  ];

  // Данные образования
  const education = [
    {
      degree: "Бакалавр информационных технологий",
      school: "Университет ИТМО",
      year: "2018–2022",
      details:
        "Специализация в области разработки программного обеспечения и искусственного интеллекта.",
    },
    {
      degree: "Курс по Full-stack Development",
      school: "Coursera / University of Michigan",
      year: "2021",
      details:
        "Изучение веб-разработки от основ до продвинутых тем с использованием MERN стека.",
    },
  ];

  // Навыки
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Навигация */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-opacity-100"
        } bg-gray-900`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Иван Петров</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
          <ul className="hidden md:flex space-x-6">
            {["about", "projects", "education", "skills", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => setActiveSection(section)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section
                        ? "text-blue-400 font-medium"
                        : ""
                    }`}
                  >
                    {section === "about"
                      ? "О себе"
                      : section === "projects"
                      ? "Проекты"
                      : section === "education"
                      ? "Образование"
                      : section === "skills"
                      ? "Навыки"
                      : "Контакты"}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Мобильное меню */}
        {isMenuOpen && (
          <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
            {["about", "projects", "education", "skills", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section
                        ? "text-blue-400 font-medium"
                        : ""
                    }`}
                  >
                    {section === "about"
                      ? "О себе"
                      : section === "projects"
                      ? "Проекты"
                      : section === "education"
                      ? "Образование"
                      : section === "skills"
                      ? "Навыки"
                      : "Контакты"}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </nav>

      <main className="pt-16 container mx-auto px-4">
        {/* О себе */}
        <section
          id="about"
          className={`transition-opacity duration-500 ${
            activeSection === "about" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://picsum.photos/id/100/400/400 "
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">Привет, я Иван!</h2>
              <p className="text-gray-300 mb-4">
                Я Full-stack инженер с опытом создания масштабируемых приложений и
                решений. Увлечён качественным кодом, архитектурой и оптимизацией.
              </p>
              <p className="text-gray-400">
                Строю карьеру в сфере разработки ПО, имея опыт работы как в
                стартапах, так и в крупных компаниях. Всегда стремлюсь к
                постоянному обучению и развитию.
              </p>
            </div>
          </div>
        </section>

        {/* Проекты */}
        <section
          id="projects"
          className={`transition-opacity duration-500 ${
            activeSection === "projects" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Мои проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Образование */}
        <section
          id="education"
          className={`transition-opacity duration-500 ${
            activeSection === "education" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Образование</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-blue-400">{item.school}</p>
                <p className="text-sm text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Навыки */}
        <section
          id="skills"
          className={`transition-opacity duration-500 ${
            activeSection === "skills" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Технические навыки</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Контакты */}
        <section
          id="contact"
          className={`transition-opacity duration-500 ${
            activeSection === "contact" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Связь со мной</h2>
          <div className="max-w-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Иван Петров"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Иван Петров. Все права защищены.
      </footer>
    </div>
  );
}