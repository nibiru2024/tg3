import { Injectable } from '@angular/core';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы, generic, утилиты, декораторы, advanced ...',
    time: 'С опытом • 2 недели',
    type: ProductType.Skill,
  },
  {
    id: '30',
    title: 'Git и GitHub',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, история версий, ветвление, удаленній репозиторий, релизы, opensourse ...',
    time: 'С опытом • 2 недели',
    type: ProductType.Skill,
  },
  {
    id: '910',
    title: 'Redux, Redux Toolkit и MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Redux, React Redux, Redux DevTools, Redux Toolkit, RTK Query, MobX...',
    time: 'С опытом • 2 недели',
    type: ProductType.Skill,
  },
  {
    id: '940',
    title: 'React Advanced',
    link: '/products/react',
    image: '/img/icons/products/icon-react.svg',
    text: 'React JS, Хуки, Формы, React Route v6, Context API, Оптимизация, Архитектура, PWA...',
    time: 'С опытом • 8 недель',
    type: ProductType.Skill,
  },
  {
    id: '920',
    title: 'Первая ступень профессии frontend-разработчика',
    link: '/products/first-stage',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'JavaScript, Debug, DOM, Webpack, ES6 Import + Export, Git, GitFlow...',
    time: 'С опытом • 3 месяца',
    type: ProductType.Skill,
  },
  {
    id: '930',
    title: 'Вторая ступень профессии frontend-разработчика',
    link: '/products/second-stage',
    image: '/img/icons/products/icon-second-stage.svg',
    text: 'React JS, Context API, Redux, WebPack, Docker, TypeScript...',
    time: 'С опытом • 6 месяцев',
    type: ProductType.Skill,
  },
  {
    id: '24',
    title: 'Основы программирования',
    link: '/products/base-programming',
    image: '/img/icons/products/icon-base-programming.svg',
    text: 'Основы алгоритмов, браузера и интернета, простые команды JS',
    time: 'С опытом • 2 недели',
    type: ProductType.Intensive,
  },
  {
    id: '32',
    title: 'Первый пет проект на JS',
    link: '/products/demo-week',
    image: '/img/icons/products/icon-test-drive.svg',
    text: 'Основы работы с модальным окном, логика прогресс-бара, check-box, формы, валидация',
    time: 'С опытом • 1 неделя',
    type: ProductType.Intensive,
  },
  {
    id: '33',
    title: 'Продминутый JavaScript. Создаем свой Excel',
    link: '/products/advanced-js',
    image: '/img/icons/products/icon-advanced-js.svg',
    text: 'Webpack, Jest, Node.js, State Managers, ООП, ESlint, SASS, Data Layer',
    time: 'С опытом • 6 месяцев',
    type: ProductType.Intensive,
  },
  {
    id: '28',
    title: 'Курс "Основы JavaScript" и 50 заданий',
    link: '/products/javascript',
    image: '/img/icons/products/icon-javascript.svg',
    text: 'JavaScript, массивы, объекты, циклы, функции, debug, асинхронность...',
    time: 'С опытом • 2 недели',
    type: ProductType.Course,
  },
  {
    id: '23',
    title: 'HTML&CSS - первый шаг в IT',
    link: '/products/html-css',
    image: '/img/icons/products/icon-html-css.svg',
    text: 'HTML, работа с текстом, списки, таблицы, формы, CSS, работа с цветом...',
    time: 'С нуля • 2 недели',
    type: ProductType.Course,
  },
  {
    id: '26',
    title: 'Марафон JavaScript "5 дней - 5 проектов"',
    link: '/products/marathon-js',
    image: '/img/icons/products/icon-marathon-five-x-five.svg',
    text: 'Плагин для картинок, мини кол Trello, слайдер картинок, мини-игра, анимированная игра',
    time: 'С нуля • 1 неделя',
    type: ProductType.Course,
  },
  {
    id: '27',
    title: 'От Junior до Middle за одно собеседование',
    link: '/products/marathon-mfd',
    image: '/img/icons/products/icon-marathon-mfd.svg',
    text: 'Отличие Junior от Middle, необходимый стек, soft skills, как расти в зарплате',
    time: 'С нуля • 2 дня',
    type: ProductType.Course,
  },
  {
    id: '930',
    title: 'Воркшоп "Перспективы в IT"',
    link: '/products/perspectives',
    image: '/img/icons/products/icon-workshop.svg',
    text: '4 шага к карьере в IT, грейды и зарплата frotend-разработчика, технологии для старта...',
    time: 'С нуля • 2 дня',
    type: ProductType.Course,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id)
  }
  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod)
      return group;
    }, {});
  }
}
