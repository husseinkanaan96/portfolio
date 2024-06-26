export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly SPRINGBOOT = new Tag('Spring Boot', 'orange');
    static readonly NODEJS = new Tag('NodeJs', 'grey');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'maroon');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'blue');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'cyan');
    static readonly PHP = new Tag('PHP', 'purple');
    static readonly HTML = new Tag('HTML5', 'green');
    static readonly CSS = new Tag('CSS3', 'black');
    static readonly EXPRESSJS = new Tag('ExpressJS', 'indigo');
    static readonly MYSQL = new Tag('MySQL', 'teal');
    static readonly PHPMYADMIN = new Tag('PHPMyAdmin', 'olive');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'pink');
    
    
    private constructor(private readonly key: string, 
                        public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}