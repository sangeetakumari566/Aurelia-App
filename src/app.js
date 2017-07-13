export class App { 
  configureRouter(config, router){
      config.title = 'Aurelia';
		
      config.map([
         { route: ['','home'],  name: 'home', moduleId: './components/home/home',  nav: true, title:'Home' },
         { route: 'contacts',  name: 'contacts', moduleId: './components/contacts/noselection',    nav: true, title:'Contacts' },
         { route: 'contacts/:id',  name: 'contacts', moduleId: './components/contacts/contact-detail',    nav: false, title:'Contact Details' }
      ]);

      this.router = router;
   }
}
