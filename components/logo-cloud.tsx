import { IconCloud } from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "flutter",
  "react",
  "android",
  "html5",
  "css3",
  "laravel",
  "vuedotjs",
  "redux",
  "tailwindcss",
  "antdesign",
  "php",
  "apache",
  "adobephotoshop",
  "adobeillustrator",
  "nextdotjs",
  "redis",
  "mariadb",
  "mysql",
  "firebase",
  "nginx",
  "docker",
  "git",
  "github",
  "androidstudio",
  "figma",
];

export default function LogoCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}
