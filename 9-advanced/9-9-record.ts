{
  // Record, 이건 뭐지?
  // 함께 묶을 수 있는 것

  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {  // type Page를 key로 사용해서 type PageInfo를 묶음
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };

  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}