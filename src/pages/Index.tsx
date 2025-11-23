import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const articles = [
    {
      title: "Основы классического балета",
      description: "Изучите фундаментальные позиции и движения, которые формируют основу балетной техники",
      image: "https://cdn.poehali.dev/projects/35252146-a423-41d5-8a2f-36cb3ccc8233/files/e7c54c75-c638-489d-ad8f-833da5487275.jpg",
      category: "Техника"
    },
    {
      title: "История танцевального искусства",
      description: "От придворных балов до современных постановок — путешествие сквозь века танца",
      image: "https://cdn.poehali.dev/projects/35252146-a423-41d5-8a2f-36cb3ccc8233/files/e00ab12e-7349-4fc3-8d41-ad03951e9213.jpg",
      category: "Культура"
    },
    {
      title: "Пластика и выразительность",
      description: "Как развить грацию движений и создать эмоциональную связь со зрителем",
      image: "https://cdn.poehali.dev/projects/35252146-a423-41d5-8a2f-36cb3ccc8233/files/0ea5c341-32e4-4289-8928-bc31f3558c20.jpg",
      category: "Практика"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-primary">En Pointe</h1>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О блоге</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-primary">
                Мир танца в каждом движении
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Погрузитесь в элегантный мир классического танца, где каждое па рассказывает историю, а техника становится искусством
              </p>
              <Button size="lg" className="mt-4 rounded-full px-8">
                Читать статьи
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="opacity-0 animate-fade-in-up animate-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/35252146-a423-41d5-8a2f-36cb3ccc8233/files/e00ab12e-7349-4fc3-8d41-ad03951e9213.jpg"
                alt="Ballet dancer"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-light text-primary mb-4">Популярные статьи</h3>
            <p className="text-muted-foreground text-lg">Исследуйте мир танцевального искусства</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up border-0 bg-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="text-xs font-medium text-primary uppercase tracking-wider">
                    {article.category}
                  </div>
                  <h4 className="text-xl font-medium text-foreground">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto hover:bg-transparent text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-light text-primary text-center">О блоге</h3>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-medium">En Pointe</span> — это пространство для тех, кто любит танец во всех его проявлениях. Здесь мы делимся знаниями о классической технике, исследуем историю танцевального искусства и вдохновляем на новые открытия.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <Icon name="BookOpen" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-medium mb-2 text-foreground">Обучение</h4>
                  <p className="text-sm text-muted-foreground">Статьи о технике и методиках тренировок</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-accent/30">
                  <Icon name="Heart" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-medium mb-2 text-foreground">Вдохновение</h4>
                  <p className="text-sm text-muted-foreground">Истории великих танцоров и постановок</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-medium mb-2 text-foreground">Сообщество</h4>
                  <p className="text-sm text-muted-foreground">Обмен опытом и творческие дискуссии</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mt-8">
                Наша миссия — сделать танцевальную культуру доступной каждому, кто чувствует музыку в своём сердце и стремится выразить себя через движение.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h2 className="text-3xl font-light">En Pointe</h2>
          <p className="text-primary-foreground/80">Танец — это поэзия движения</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
