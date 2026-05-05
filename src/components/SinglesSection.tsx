import { motion } from "framer-motion";
import { Download, Music2 } from "lucide-react";
import albumCover from "@/assets/cover-vyshe-pravil.jpg";
import coverVyshePravil from "@/assets/cover-vyshe-pravil.jpg";
import coverGrustnaya from "@/assets/cover-grustnaya-istoriya.jpg";
import coverKogdaGlaza from "@/assets/cover-kogda-glaza.jpg";
import coverPokaGorit from "@/assets/cover-poka-gorit-okno.jpg";
import coverHolodny from "@/assets/cover-holodny-svet.jpg";
import coverZachemMolchat from "@/assets/cover-zachem-molchat.jpg";
import coverNaOdnoyVolne from "@/assets/cover-na-odnoy-volne.jpg";
import coverNemoyFinal from "@/assets/cover-nemoy-final.jpg";
import coverNochnoyReys from "@/assets/cover-nochnoy-reys.jpg";
import coverYaBuduZhivym from "@/assets/cover-ya-budu-zhivym.jpg";
import iconYandexMusic from "@/assets/icon-yandex-music.png";
import iconVkMusic from "@/assets/icon-vk-music.png";
import iconSpotify from "@/assets/icon-spotify.png";

interface SingleLinks {
  yandex?: string;
  vk?: string;
  spotify?: string;
  download?: string;
}

interface Single {
  title: string;
  cover: string;
  alt: string;
  description: string;
  extendedDescription?: string;
  links?: SingleLinks;
}

const singles: Single[] = [
  {
    title: "Выше правил",
    cover: coverVyshePravil,
    alt: "DREAMSYNT - Выше правил",
    description: "Modern Russian Dance-Pop, Emotional Synthwave, Cinematic, 125 BPM",
    extendedDescription:
      "Это не просто танцевальный трек — это кинематографичный синтвейв-драйв, где каждый удар баса работает как импульс свободы. 125 BPM и неоновые синтезаторы создают звук, который не отпускает с первого прослушивания.\n\nВключай, если сегодня чувствуешь: правила созданы, чтобы их ломать. А любовь и успех — это одна дорога.",
    links: {
      yandex: "https://clck.ru/3TE4Cc",
      vk: "https://clck.ru/3TE4Ft",
      spotify: "https://clck.ru/3TE4Hq",
      download: "https://clck.ru/3TE4T8",
    },
  },
  {
    title: "Грустная история",
    cover: coverGrustnaya,
    alt: "DREAMSYNT - Грустная история",
    description: "Cinematic Synthwave Ballad, Slow Electronic Pop, 75 BPM",
    extendedDescription:
      "Это не просто трек, а кинематографичная синтвейв-баллада на 75 BPM, где каждый удар минималистичного бита и каждая нота гитары звучат как отзвук прожитых лет.\n\nЭмоциональная вокальная подача рассказывает о моменте, когда пора отпустить, простить и пойти своей дорогой.\n\nВключай, если сегодня чувствуешь: иногда честное «довольно» звучит громче любых обещаний.",
    links: {
      yandex: "https://clck.ru/3TFwrm",
      vk: "https://clck.ru/3TFwtG",
      spotify: "https://clck.ru/3TFwvL",
      download: "https://clck.ru/3TFwxi",
    },
  },
  {
    title: "Когда глаза говорят",
    cover: coverKogdaGlaza,
    alt: "DREAMSYNT - Когда глаза говорят",
    description: "Modern Russian Dance-Pop, Cinematic Synthwave, 122 BPM",
    extendedDescription:
      "Это кинематографичный dance-pop на 122 BPM, где энергичный ритм встречается с тихой магией близости.\n\nЧёткая перкуссия, атмосферные синтезаторы и гитара создают звук, который звучит как разговор без слов. Честная эмоциональная подача ведёт туда, где не нужно объясняться — достаточно просто быть рядом.\n\nВключай, если сегодня чувствуешь: самое громкое признание часто звучит в тишине.",
    links: {
      yandex: "https://clck.ru/3TFxFw",
      vk: "https://clck.ru/3TFxHP",
      spotify: "https://clck.ru/3TFxKP",
      download: "https://clck.ru/3TFxMw",
    },
  },
  {
    title: "Пока горит окно",
    cover: coverPokaGorit,
    alt: "DREAMSYNT - Пока горит окно",
    description: "Modern Russian Pop, Dance-Pop, Emotional Trap Ballad, 120 BPM",
    extendedDescription:
      "Это кинематографичная эмоциональная баллада на 120 BPM, где современная поп-эстетика переплетается с атмосферой тихого вечера и искренней близости. Минималистичный ритм, воздушные синтезаторы и чистая гитара в пространстве реверберации создают звук, который звучит как разговор в темноте.\n\nЭмоциональная подача и динамичная аранжировка превращают историю момента в саундтрек для тех, кто ценит «здесь и сейчас».\n\nВключай, если сегодня чувствуешь: иногда самое важное — просто оставить свет включённым и не отпускать руку.",
    links: {
      yandex: "https://clck.ru/3TMFft",
      vk: "https://clck.ru/3TMFiR",
      spotify: "https://clck.ru/3TMFm5",
      download: "https://clck.ru/3TMFoT",
    },
  },
  {
    title: "Холодный свет",
    cover: coverHolodny,
    alt: "DREAMSYNT - Холодный свет",
    description: "Modern Russian Pop, Dance-Pop, Emotional Trap Ballad, 80 BPM",
    extendedDescription:
      "Это кинематографичная эмоциональная баллада на 100 BPM, где современный поп-ритм переплетается с атмосферой ночного города и тихой внутренней борьбой.\n\nМинималистичная перкуссия, атмосферные текстуры и чистая гитара в пространстве реверберации создают звук, который звучит как откровенный монолог в салоне автомобиля на пустой трассе. Мелодика и динамичная подача превращают историю о блеске и пустоте в саундтрек для тех, кто знает: успех не заменяет тепло рядом.\n\nВключай, если сегодня чувствуешь: иногда самый громкий вопрос остаётся без ответа, пока ты не остановишься.",
    links: {
      yandex: "https://clck.ru/3TMG3F",
      vk: "https://clck.ru/3TMG5Z",
      spotify: "https://clck.ru/3TMG7f",
      download: "https://clck.ru/3TMG9f",
    },
  },
  {
    title: "Зачем молчать",
    cover: coverZachemMolchat,
    alt: "DREAMSYNT - Зачем молчать",
    description: "Cinematic Ambient Ballad, 75 BPM",
    extendedDescription:
      "Это кинематографичная эмбиент-баллада на 75 BPM, где каждый удар минималистичного бита, каждая нота струнных и каждая капля гранулярного синтеза звучат как тихий разговор после долгого молчания. Эмоциональная вокальная подача и атмосферный продакшен создают звук, который обнимает в пасмурный вечер.\n\nВключай, если сегодня чувствуешь: иногда одно честное «давай начнём сначала» важнее тысячи невысказанных слов.",
    links: {
      yandex: "https://clck.ru/3TFxYz",
      vk: "https://clck.ru/3TFxbF",
      spotify: "https://clck.ru/3TFxcz",
      download: "https://clck.ru/3TFxer",
    },
  },
  {
    title: "На одной волне",
    cover: coverNaOdnoyVolne,
    alt: "DREAMSYNT - На одной волне",
    description: "Club Dance-Pop, 128 BPM",
    extendedDescription:
      "Это кинематографичный dance-pop на 125 BPM, где клубная энергия встречается с балеарской свободой. Яркие синтезаторные линии, чёткий ритм и пульсирующий грув создают звук, который мгновенно переносит на побережье под звёздным небом.\n\nЭмоциональная подача и летняя атмосфера делают этот трек саундтреком для моментов, когда хочется просто отпустить городскую суету и поймать свой ритм.\n\nВключай, если сегодня чувствуешь: лето — это не сезон, а состояние души.",
    links: {
      yandex: "https://clck.ru/3TMGNv",
      vk: "https://clck.ru/3TMGR9",
      spotify: "https://clck.ru/3TMGTg",
      download: "https://clck.ru/3TMGVi",
    },
  },
  {
    title: "Немой финал",
    cover: coverNemoyFinal,
    alt: "DREAMSYNT - Немой финал",
    description: "Emotional Cinematic Ballad, 90 BPM",
    extendedDescription:
      "Кинематографичная баллада на 90 BPM, где фортепианная мелодия и оркестровые струнные создают пространство тихого прощания.\n\nПросторная атмосфера, чистые гитарные аккорды и искренняя вокальная подача превращают историю расставания в кадр из фильма, где герои расстаются без криков, но с пониманием.\n\nВключай, если сегодня чувствуешь: иногда молчание говорит громче любых обещаний.",
    links: {
      yandex: "https://clck.ru/3TRvnc",
      vk: "https://clck.ru/3TRvpB",
      spotify: "https://clck.ru/3TRvrn",
      download: "https://clck.ru/3TRvuQ",
    },
  },
  {
    title: "Ночной рейс",
    cover: coverNochnoyReys,
    alt: "DREAMSYNT - Ночной рейс",
    description: "Modern Russian Dance-Pop, Emotional Synthwave, 100 BPM",
    extendedDescription:
      "Кинематографичный dance-pop на 100 BPM, где энергия ночного шоссе встречается с тихой силой саморефлексии.\n\nЧёткий ритм, атмосферные синтезаторы и чистая гитара в пространстве реверберации создают звук, который звучит как разговор с собой на ходу. Искренняя подача и продуманная аранжировка ведут туда, где не нужно никому ничего доказывать — достаточно просто быть в пути.\n\nВключай, если сегодня чувствуешь: иногда самый честный диалог происходит в тишине салона.",
    links: {
      yandex: "https://clck.ru/3TRw7N",
      vk: "https://clck.ru/3TRw8X",
      spotify: "https://clck.ru/3TRwAQ",
      download: "https://clck.ru/3TRwCA",
    },
  },
  {
    title: "Я буду живым",
    cover: coverYaBuduZhivym,
    alt: "DREAMSYNT - Я буду живым",
    description: "Modern Russian Dance-Pop, Emotional Synthwave, 124 BPM",
    extendedDescription:
      "Кинематографичный dance-pop на 120 BPM, где энергия ночного шоссе встречается с тихой силой внутреннего перерождения. Чёткий ритм, атмосферные синтезаторы и чистая гитара в пространстве реверберации создают звук, который звучит как первый глубокий вдох после долгого затишья.\n\nИскренняя подача и продуманная аранжировка ведут туда, где страхи остаются в прошлом, а впереди — только свет и движение.\n\nВключай, если сегодня чувствуешь: иногда самый честный шаг — это отпустить старое и выбрать себя.",
    links: {
      yandex: "https://clck.ru/3TRwM5",
      vk: "https://clck.ru/3TRwNA",
      spotify: "https://clck.ru/3TRwQi",
      download: "https://clck.ru/3TRwT2",
    },
  },
];

// Brand icons from uploaded image assets
const YandexMusicIcon = ({ className = "" }: { className?: string }) => (
  <img src={iconYandexMusic} alt="" aria-hidden="true" className={className} />
);

const VkMusicIcon = ({ className = "" }: { className?: string }) => (
  <img src={iconVkMusic} alt="" aria-hidden="true" className={className} />
);

const SpotifyIcon = ({ className = "" }: { className?: string }) => (
  <img src={iconSpotify} alt="" aria-hidden="true" className={className} />
);

const SingleCard = ({ single, index }: { single: Single; index: number }) => {
  const links = single.links ?? {};
  return (
    <motion.div
      className="glass-panel p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden relative flex-shrink-0"
        style={{
          boxShadow:
            "0 0 20px hsla(185,100%,50%,0.12), 0 0 40px hsla(325,90%,55%,0.06)",
          perspective: 800,
        }}
        whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
      >
        <img src={single.cover} alt={single.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </motion.div>
      <div className="flex flex-col items-center sm:items-start gap-3 flex-1">
        <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground text-center sm:text-left">
          {single.title}
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground font-body text-center sm:text-left">
          {single.description}
        </p>
        {single.extendedDescription && (
          <p className="text-xs sm:text-sm text-foreground/80 font-body text-center sm:text-left whitespace-pre-line">
            {single.extendedDescription}
          </p>
        )}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 pt-1">
          <a
            href={links.yandex ?? "#"}
            target={links.yandex ? "_blank" : undefined}
            rel={links.yandex ? "noopener noreferrer" : undefined}
            className="neon-glow-btn inline-flex items-center gap-2 text-xs sm:text-sm"
          >
            <YandexMusicIcon className="w-4 h-4" />
            <span>Слушать Яндекс Музыка</span>
          </a>
          <a
            href={links.vk ?? "#"}
            target={links.vk ? "_blank" : undefined}
            rel={links.vk ? "noopener noreferrer" : undefined}
            className="neon-glow-btn inline-flex items-center gap-2 text-xs sm:text-sm"
          >
            <VkMusicIcon className="w-4 h-4" />
            <span>Слушать ВКонтакте</span>
          </a>
          <a
            href={links.spotify ?? "#"}
            target={links.spotify ? "_blank" : undefined}
            rel={links.spotify ? "noopener noreferrer" : undefined}
            className="neon-glow-btn inline-flex items-center gap-2 text-xs sm:text-sm"
          >
            <SpotifyIcon className="w-4 h-4" />
            <span>Слушать Spotify</span>
          </a>
          <a
            href={links.download ?? "#"}
            target={links.download ? "_blank" : undefined}
            rel={links.download ? "noopener noreferrer" : undefined}
            className="neon-glow-btn-magenta inline-flex items-center gap-2 text-xs sm:text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Скачать</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SinglesSection = () => {
  return (
    <section id="singles" className="relative py-[4.2rem] sm:py-[5.6rem] px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4 text-gradient-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Альбом «Выше правил»
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-sm md:text-base tracking-[0.2em] uppercase mb-16 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Дата релиза: 21 апреля 2026 года
        </motion.p>

        {/* Album cover */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden relative glass-panel p-2"
            style={{
              boxShadow:
                "0 0 40px hsla(185,100%,50%,0.2), 0 0 80px hsla(325,90%,55%,0.1)",
              perspective: 800,
            }}
            whileHover={{ rotateY: 6, rotateX: -3, scale: 1.02 }}
          >
            <img
              src={albumCover}
              alt="Альбом DREAMSYNT- Выше правил"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-xl" />
          </motion.div>
        </motion.div>

        {/* Singles list */}
        <motion.h3
          className="text-xl sm:text-2xl font-display font-semibold text-center mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Синглы
        </motion.h3>

        <div className="flex flex-col gap-4 sm:gap-6">
          {singles.map((single, i) => (
            <SingleCard key={single.title} single={single} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglesSection;
