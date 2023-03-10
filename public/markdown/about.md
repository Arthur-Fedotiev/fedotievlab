# Introduction to Angular concepts

Contents

- [Modules](guide/architecture#modules)
- [Components](guide/architecture#components)
- [Templates, directives, and data binding](guide/architecture#templates-directives-and-data-binding)
- [Services and dependency injection](guide/architecture#services-and-dependency-injection)
- [Routing](guide/architecture#routing)
- [What's next](guide/architecture#whats-next)

Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.

The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into _NgModules_. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules. An application always has at least a _root module_ that enables bootstrapping, and typically has many more _feature modules_.

- Components define _views_, which are sets of screen elements that Angular can choose among and modify according to your program logic and data
- Components use _services_, which provide specific functionality not directly related to views. Service providers can be _injected_ into components as _dependencies_, making your code modular, reusable, and efficient.

Modules, components and services are classes that use _decorators_. These decorators mark their type and provide metadata that tells Angular how to use them.

- The metadata for a component class associates it with a _template_ that defines a view. A template combines ordinary HTML with Angular _directives_ and _binding markup_ that allow Angular to modify the HTML before rendering it for display.
- The metadata for a service class provides the information Angular needs to make it available to components through _dependency injection (DI)_

An application's components typically define many views, arranged hierarchically. Angular provides the `[Router](api/router/Router)` service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

See the [Angular Glossary](guide/glossary) for basic definitions of important Angular terms and usage.

For the sample application that this page describes, see the [live example](generated/live-examples/architecture/stackblitz.html "live example") / [download example](generated/zips/architecture/architecture.zip "Download example").

## Modules[_link_](guide/architecture#modules "Link to this heading")

Angular _NgModules_ differ from and complement JavaScript (ES2015) modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.

Every Angular application has a _root module_, conventionally named `AppModule`, which provides the bootstrap mechanism that launches the application. An application typically contains many functional modules.

Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. For example, to use the router service in your app, you import the `[Router](api/router/Router)` NgModule.

Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability. In addition, this technique lets you take advantage of _lazy-loading_ ???that is, loading modules on demand??? to minimize the amount of code that needs to be loaded at startup.

For a more detailed discussion, see [Introduction to modules](guide/architecture-modules).

## Components[_link_](guide/architecture#components "Link to this heading")

Every Angular application has at least one component, the _root component_ that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML _template_ that defines a view to be displayed in a target environment.

The `@[Component](api/core/Component)()` decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.

Decorators are functions that modify JavaScript classes. Angular defines a number of decorators that attach specific kinds of metadata to classes, so that the system knows what those classes mean and how they should work.

[Learn more about decorators on the web.](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.x5c2ndtx0)

### Templates, directives, and data binding[_link_](guide/architecture#templates-directives-and-data-binding "Link to this heading")

A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template _directives_ provide program logic, and _binding markup_ connects your application data and the DOM. There are two types of data binding:

Data bindings

Details

Event binding

Lets your application respond to user input in the target environment by updating your application data.

Property binding

Lets you interpolate values that are computed from your application data into the HTML.

Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. Angular supports _two-way data binding_, meaning that changes in the DOM, such as user choices, are also reflected in your program data.

Your templates can use _pipes_ to improve the user experience by transforming values for display. For example, use pipes to display dates and currency values that are appropriate for a user's locale. Angular provides predefined pipes for common transformations, and you can also define your own pipes.

For a more detailed discussion of these concepts, see [Introduction to components](guide/architecture-components).

## Services and dependency injection[_link_](guide/architecture#services-and-dependency-injection "Link to this heading")

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a _service_ class. A service class definition is immediately preceded by the `@[Injectable](api/core/Injectable)()` decorator. The decorator provides the metadata that allows other providers to be **injected** as dependencies into your class.

_Dependency injection_ (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.

For a more detailed discussion, see [Introduction to services and DI](guide/architecture-services).

### Routing[_link_](guide/architecture#routing "Link to this heading")

The Angular `[Router](api/router/Router)` NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your application. It is modeled on the familiar browser navigation conventions:

- Enter a URL in the address bar and the browser navigates to a corresponding page
- Click links on the page and the browser navigates to a new page
- Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen

The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies.

If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can _lazy-load_ the module on demand.

The router interprets a link URL according to your application's view navigation rules and data state. You can navigate to new views when the user clicks a button or selects from a drop box, or in response to some other stimulus from any source. The router logs activity in the browser's history, so the back and forward buttons work as well.

To define navigation rules, you associate _navigation paths_ with your components. A path uses a URL-like syntax that integrates your program data, in much the same way that template syntax integrates your views with your program data. You can then apply program logic to choose which views to show or to hide, in response to user input and your own access rules.

For a more detailed discussion, see [Routing and navigation](guide/router).

## What's next[_link_](guide/architecture#whats-next "Link to this heading")

You've learned the basics about the main building blocks of an Angular application. The following diagram shows how these basic pieces are related.

![overview](generated/images/guide/architecture/overview2.png)

- Together, a component and template define an Angular view
  - A decorator on a component class adds the metadata, including a pointer to the associated template
  - Directives and binding markup in a component's template modify views based on program data and logic
- The dependency injector provides services to a component, such as the router service that lets you define navigation among views

Each of these subjects is introduced in more detail in the following pages.

- [Introduction to Modules](guide/architecture-modules)
- [Introduction to Components](guide/architecture-components)
  - [Templates and views](guide/architecture-components#templates-and-views)
  - [Component metadata](guide/architecture-components#component-metadata)
  - [Data binding](guide/architecture-components#data-binding)
  - [Directives](guide/architecture-components#directives)
  - [Pipes](guide/architecture-components#pipes)
- [Introduction to services and dependency injection](guide/architecture-services)

When you're familiar with these fundamental building blocks, you can explore them in more detail in the documentation. To learn about more tools and techniques that are available to help you build and deploy Angular applications, see [Next steps: tools and techniques](guide/architecture-next-steps).
