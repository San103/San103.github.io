import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
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
  return (
    <div className="flex z-10 size-full max-w-lg items-center justify-center overflow-hidden rounded-lg pb-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
