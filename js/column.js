import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import Card from "./card.js";
import PlusIcon from "./icons/plus.js";
import DotsIcon from "./icons/dots.js";

function ColumnIcon({ title }) {
  switch (title) {
    case "To Do":
      return html`<span class="circle me-2 border-dashed"></span>`;
    case "In Progress":
      return html`<span class="circle me-2"></span>`;
    case "Done":
      return html`<span class="circle me-2 bg-black"></span>`;
  }
}

export default function Column({ title, tasks }) {
  return html`
    <div class="w-33">
      <div class="p-3 pb-0 flex align-items-center justify-content-between">
        <div class="flex">
          <${ColumnIcon} title=${title} />
          <span>${title}</span>
        </div>
        <div class="flex">
          <${PlusIcon} alt="plus" />
          <${DotsIcon} alt="dots" />
        </div>
      </div>
      <div class="column">
        ${tasks.map(
          (task) => html`
            <${Card}
              category=${task.category}
              title=${task.title}
              assignee=${task.assignee}
              tags=${task.tags}
              comments=${task.comments}
            />
          `
        )}
      </div>
    </div>
  `;
}
