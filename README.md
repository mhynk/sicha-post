# 시차우편 · Sicha Post

> Letters that open at your own midnight.
> 해외에 있는 한국인을 위한 새해 타임캡슐. 12월에 넣은 편지를 까치가 각자의 자정에 물고 와요.

Sicha Post is a New Year time capsule for Koreans living abroad and the friends and family they left at home. Friends seal letters into a shared capsule during December, and on January 1 a magpie (까치) delivers them at **midnight in each person's own time zone**.

**Status:** 🚧 In development. v1.0 targeted for Dec 13, 2026; first real capsule opens Jan 1, 2027.

---

## How it works

The capsule doesn't open all at once. It travels with the New Year.

| City | Local time | New York time |
| --- | --- | --- |
| Seoul (KST) | Jan 1, 00:00 | Dec 31, 10:00 |
| London (GMT) | Jan 1, 00:00 | Dec 31, 19:00 |
| New York (EST) | Jan 1, 00:00 | Jan 1, 00:00 |
| Los Angeles (PST) | Jan 1, 00:00 | Jan 1, 03:00 |

Friends who are still waiting get a note when the capsule opens somewhere else first: *"The magpie just left Seoul."*

## Why I built this

I came to the U.S. as an international student, and every New Year's Eve has felt a little out of sync. Around 10 a.m. on December 31, my phone lights up with "새해 복 많이 받아!" from friends and family in Korea. They're already in the new year while I'm still in the middle of the old one, and by the time midnight finally reaches me, the group chat has gone quiet.

Sicha Post turns that time difference into something to look forward to. Letters written in December wait for each person's own midnight: the people back home open theirs first, and fourteen hours later the magpie arrives at my door. Same New Year, different midnights.

I'm also building it to get hands-on with React, Python, and SQL by shipping something real people use, collecting their feedback, and improving it.

## Why a magpie?

In Korea, the magpie (까치, *kkachi*) has long been the bird that brings good news.

- **A welcome visitor.** An old saying goes that if a magpie sings in the morning, a welcome guest is on the way. One of its traditional names, 희작 (喜鵲), means "the magpie of joy."
- **Tied to the New Year.** The day before Lunar New Year is called 까치설날, "Magpie New Year's Day."
- **A bridge between people far apart.** In the folktale of the Weaver and the Cowherd, two lovers separated by the Milky Way meet once a year when magpies and crows form a bridge for them, the 오작교 (烏鵲橋).
- **A folk art icon.** In 까치호랑이 (magpie and tiger) folk paintings, the magpie carries good news while the tiger keeps bad luck away. These paintings were often hung for the New Year.

So in Sicha Post, the magpie carries letters from home across time zones, and the final scene, once everyone has opened their letters, is a magpie bridge connecting every city.

| Meaning | In Sicha Post |
| --- | --- |
| Bringer of good news | Delivers the letters |
| 까치설날 | Arrives with the New Year |
| 오작교 | Connects people once a year; the ending scene |
| 까치호랑이 | Folk-art-inspired illustration style |

## Features

### v1.0 (Dec 2026)

- [ ] Email magic-link login (no passwords)
- [ ] Create a capsule and share an invite link
- [ ] Join with name, email, and auto-detected time zone
- [ ] Write letters to everyone or to one friend, with up
