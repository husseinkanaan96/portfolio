export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'black');
    static readonly SPRINGBOOT = new Tag('Spring Boot', 'black');
    static readonly NODEJS = new Tag('NodeJs', 'black');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'black');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'black');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'black');
    static readonly PHP = new Tag('PHP', 'black');
    static readonly HTML = new Tag('HTML5', 'black');
    static readonly CSS = new Tag('CSS3', 'black');
    static readonly EXPRESSJS = new Tag('ExpressJS', 'black');
    static readonly MYSQL = new Tag('MySQL', 'black');
    static readonly PHPMYADMIN = new Tag('PHPMyAdmin', 'black');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'black');
    static readonly LARAVEL = new Tag('Laravel', 'black');
    static readonly SQLITE = new Tag('SQLite', 'black');
    static readonly DOTNETCORE = new Tag('.NET Core', 'black');
    
    
    private constructor(private readonly key: string, 
                        public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}