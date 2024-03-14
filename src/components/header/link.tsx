import { GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react";

export function Links() {
    return (
        <div className="px-10 flex items-center justify-between">
        <a
          href="https://github.com/nilloferreiira"
          target="_blank"
          className="ring-1 ring-zinc-100 rounded-full size-12 p-6 flex items-center justify-center hover:shadow-md hover:shadow-zinc-50/40"
        >
          <span>
            <GithubLogo size={18} color="white" weight="bold" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/danillo-ferreira-a91522269/"
          target="_blank"
          className="ring-1 ring-zinc-100 rounded-full size-12 p-6 flex items-center justify-center hover:shadow-md hover:shadow-zinc-50/40"
        >
          <span>
            <LinkedinLogo size={18} color="white" weight="bold" />
          </span>
        </a>
        <a
           href="public/files/curriculo-danillo-ferreira.pdf" download
          className="ring-1 ring-zinc-100 rounded-full size-12 p-6 flex items-center justify-center hover:shadow-md hover:shadow-zinc-50/40"
        >
          <span>
            <FileText size={18} color="white" weight="bold" />
          </span>
        </a>
      </div>
    )
}