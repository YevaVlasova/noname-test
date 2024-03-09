const iconsUrl: any = [
  {
    id: 0,
    count: 11,
    urls: [
      "https://img.icons8.com/ios-glyphs/30/626066/react.png",
      "https://img.icons8.com/fluency-systems-filled/30/626066/nextjs.png",
      "https://img.icons8.com/ios-filled/30/626066/angularjs.png",
      "https://img.icons8.com/windows/30/626066/vuetify.png",
      "https://img.icons8.com/material-rounded/30/626066/typescript.png",
      "https://img.icons8.com/material-outlined/30/626066/mysql-logo.png",
      "https://img.icons8.com/ios/30/626066/express-js.png",
      "https://img.icons8.com/ios-glyphs/30/626066/php.png",
      "https://img.icons8.com/ios/30/626066/java-coffee-cup-logo--v1.png",
      "https://img.icons8.com/windows/30/626066/nodejs.png",
      "https://img.icons8.com/windows/30/626066/amazon-web-services.png",
    ],
    names: ["React", "Next.js", "Angular", "Vue", "TypeScript", "MySQL", "Express.js", "PHP", "Java", "Node.js", "AWS"],
  },
  {
    id: 1,
    count: 7,
    urls: [
      "https://img.icons8.com/ios-glyphs/30/626066/swift.png",
      "https://img.icons8.com/ios-filled/30/626066/flutter.png",
      "https://img.icons8.com/ios-filled/50/626066/kotlin.png",
      "https://img.icons8.com/ios-glyphs/30/626066/react.png",
      "https://img.icons8.com/ios-filled/50/626066/ionic.png",
      "https://img.icons8.com/windows/30/626066/nodejs.png",
      "https://img.icons8.com/ios-filled/30/626066/azure-api-manager.png",
    ],
    names: ["Swift", "Flutter", "Kotlin", "React Native", "Ionic", "Node.js", "MS Azure"],
  },
  {
    id: 2,
    count: 7,
    urls: [
      "https://img.icons8.com/ios-filled/30/626066/laravel.png",
      "https://img.icons8.com/ios/30/626066/java-coffee-cup-logo--v1.png",
      "https://img.icons8.com/windows/30/626066/nodejs.png",
      "https://img.icons8.com/ios-filled/30/626066/django.png",
      "https://img.icons8.com/ios-glyphs/30/626066/react.png",
      "https://img.icons8.com/ios-filled/30/626066/angularjs.png",
      "https://img.icons8.com/windows/30/626066/vuetify.png",
    ],
    names: ["Laravel", "Java", "Node.js", "Django", "React", "Angular", "Vue"],
  },
  {
    id: 3,
    count: 7,
    urls: [
      "https://img.icons8.com/ios-filled/50/626066/c-plus-plus-logo.png",
      "https://img.icons8.com/ios/30/626066/java-coffee-cup-logo--v1.png",
      "https://img.icons8.com/ios/50/626066/ruby-programming-language.png",
      "https://img.icons8.com/ios-filled/50/626066/python.png",
      "https://img.icons8.com/ios-filled/30/626066/django.png",
      "https://img.icons8.com/ios-filled/50/626066/flask.png",
      "https://img.icons8.com/windows/32/626066/ruby-on-rails.png",
    ],
    names: ["C++", "Java", "Ruby", "Python", "Django", "Flask", "Ruby on Rails"],
  },
  {
    id: 4,
    count: 7,
    urls: [
      "https://img.icons8.com/windows/30/626066/amazon-web-services.png",
      "https://img.icons8.com/ios-filled/30/626066/azure-api-manager.png",
      "https://img.icons8.com/ios-filled/50/626066/google-cloud-platform.png",
      "https://img.icons8.com/fluency-systems-filled/48/626066/docker.png",
      "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/626066/external-nginx-accelerates-content-and-application-delivery-improves-security-logo-bold-tal-revivo.png",
      "https://img.icons8.com/ios-filled/50/626066/terraform.png",
      "https://img.icons8.com/windows/32/626066/kubernetes.png",
      "https://img.icons8.com/windows/32/626066/digital-ocean.png",
    ],
    names: ["AWS", "MS Azure", "Google Cloud", "Docker", "Nginx", "Terraform", "Kubernetes", "Digital Ocean"],
  },
];

export function getUrls(id: number) {
  return iconsUrl[id];
}
