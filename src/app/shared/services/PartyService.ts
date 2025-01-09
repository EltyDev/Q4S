import { Injectable } from "@angular/core";

export type PartyType = "far_left" | "left" | "center_left" | "center_right" | "right" | "far_right";

interface PartyInfo {
  name: string,
  type: PartyType,
  shortDescription: string,
  description: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  readonly #infos: PartyInfo[] = [
    {
      name: "Extrême gauche",
      type: "far_left",
      shortDescription: "Vous êtes sexuellement d'extrême gauche, vous aimez : être dominé - donner du plaisir - découvrir de nouvelles choses ",
      description: "L’extrême gauche dans notre classification se définit par des préférences sexuelles sur le partage et surtout une attention particulière sur le plaisir de son partenaire. Psychologiquement vous êtes attentif au plaisir sexuel et émotionnel de votre moitié tout en le plaçant au-dessus de vous. Son plaisir est votre plaisir néanmoins vous savez aussi quand il faut s’occuper de vous. Votre sexualité à plusieurs facettes et a tendance à être représentée par la dominance, vous aimez être dominé(e) ou du moins que votre partenaire prenne des initiatives. Vous êtes une personne ouverte aux nouvelles expériences et pour vous l’amour comme la sexualité n’ont pas de frontière ni de code, vous êtes libre avec vos goûts même les moins conventionnelles.",
      img: "assets/party/farLeft.png"
    },
    {
      name: "Gauche",
      type: "left",
      shortDescription: "Vous êtes sexuellement de gauche, vous aimez : l'équité - donner du plaisir - être à l'écoute ",
      description: "La gauche dans notre classification se définit par les valeurs de l’égalité. Psychologiquement, vous et votre partenaire doivent avoir une part égale de plaisir et d’attention. L’équité entre votre plaisir et celui de votre moitié est la ligne directive de votre relation et vous le faites savoir dans le choix des poses sexuelles et dans la manière que vous donnez du plaisir à votre partenaire. Néanmoins, vous savez aussi montrer plus d’extravagance si votre partenaire vous le demande, vous saurez prendre les initiatives et guider votre moment intime avec de la dominance et plus d’ardeur. Or, dans la situation inverse vous êtes tout autant enclin à laisser votre partenaire vous guider voir exprimer sa propre dominante sans que vous n’y voyez d'inconvénient.",
      img: "assets/party/left.png"
    },
    {
      name: "Centre gauche",
      type: "center_left",
      shortDescription: "Vous êtes sexuellement de centre gauche, vous aimez : être à l'écoute - le plaisir partagé - qu'on s'occupe de vous",
      description: "Le centre gauche/droite se définit dans notre classification comme étant à mi-chemin entre gauche et droite. Psychologiquement vous partagez des valeurs de gauche et de droite comme le plaisir partagé ou bien le choix de vos positions sexuelles. Néanmoins vous n’en restez pas moins un conservateur, vous aimez le sex traditionnel dans les règles de l’art. Votre vision du rapport sexuel est guidée par vos préjugés et ou expérience ainsi que par votre psychologie. Vous aimez donner envie à votre partenaire mais vous aimez aussi sentir toute son attention sur vous. Vous n’êtes pas ouvert à l’extravagance ni aux nouveautés, jamais vous ne laisseriez être dominé ou vous laisser emmener vers des pratiques sexuelles que vous estimez douteuses. C’est pour cela que par vos choix, vous maintenez une sexualité somme toute banale et conservateur quand bien même vous restez attentif aux besoins de votre moitié.",
      img: "assets/party/centerLeft.png"
    },
    {
      name: "Centre droit",
      type: "center_right",
      shortDescription: "Vous êtes sexuellement de Centre droit, vous aimez : Qu'on s'occupe de vous - être à l'écoute - le Vanilla",
      description: "Le centre gauche/droite se définit dans notre classification comme étant à mi-chemin entre gauche et droite. Psychologiquement vous partagez des valeurs de gauche et de droite comme le plaisir partagé ou bien le choix de vos positions sexuelles. Néanmoins vous n’en restez pas moins un conservateur, vous aimez le sex traditionnel dans les règles de l’art. Votre vision du rapport sexuel est guidée par vos préjugés et ou expérience ainsi que par votre psychologie. Vous aimez donner envie à votre partenaire mais vous aimez aussi sentir toute son attention sur vous. Vous n’êtes pas ouvert à l’extravagance ni aux nouveautés, jamais vous ne laisseriez être dominé ou vous laisser emmener vers des pratiques sexuelles que vous estimez douteuses. C’est pour cela que par vos choix, vous maintenez une sexualité somme toute banale et conservateur quand bien même vous restez attentif aux besoins de votre moitié.",
      img: "assets/party/centerRight.png"
    },
    {
      name: "Droite",
      type: "right",
      shortDescription: "Vous êtes sexuellement de droite, vous aimez : Qu'on s'occupe de vous - les valeurs du sex - votre plaisir ",
      description: "La droite dans notre classification se définit comme étant conservatrice. Votre sexualité est proche de ce qui se fait de plus basique, vous ne voulez pas voir quelque chose sortir de l’habituel interagir avec vos pratiques. Psychologiquement, vous aimez recevoir de l’attention de votre partenaire et vous aimer lui redonner. Plus il y aura de la tendresse et plus vos convictions sexuelles et émotionnelles vous guideront vers une sexualité conservatrice ; souvent vous êtes le sexe dominant ou du moins au-dessus. Vous ne pouvez pas vous permettre d’être en dessous ou même d’être dominé et encore moins de tester des positions ou pratiques plus exotiques par rapport à ce qui se fait lors d’un moment intime depuis des siècles. Que ce soit en missionnaire ou en Levrette ou même dans les préliminaires, vous ne resterez jamais sur votre faim, ni vous ni votre partenaire, or, il n’est pas envisageable de songer à changer les rapports de force entre vous et votre moitié.",
      img: "assets/party/right.png"
    },
    {
      name: "Extrême droite",
      type: "far_right",
      shortDescription: "Vous êtes sexuellement d'extrême droite, vous aimez : dominer - votre plaisir - les valeurs du sex",
      description: "L’extrême droite dans notre classification se définit comme étant très conservatrice. Votre sexualité peut se qualifier de “vanilla” dans certains cas, c’est-à-dire une sexualité conservatrice qui suit les schéma de ce qui se faisait déjà il y a 100 ans. Pour vous, vous êtes le dominant et vous le faites savoir lors des moments intimes. Vous êtes au-dessus, vous marquez votre partenaire de votre essence et vous restez possessif. Votre partenaire est à vous et seulement à vous. C’est pour cela que émotionnellement et sexuellement vous maintenez un rapport de force dominant et conservateur afin de préserver, même en-dehors des codes traditionnels, la main mise sur votre moitié. Psychologiquement vous préférez recevoir l’attention plus que de le donner, ce qui compte surtout c’est l’acte sexuel en lui-même et votre plaisir personnel. Il n’y a pas de place à des poses exotiques ou à l’extravagance, vous guidez les instants intimes et vous savez ce que vous faites.",
      img: "assets/party/farRight.png"
    }
  ]

  constructor() {};

  getInfo(type: PartyType) {
    return this.#infos.find(info => info.type == type);
  }

}