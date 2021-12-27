var count = 1;

let imageDiv = document.getElementById("imageDiv");

function getPage() {
  count++;
  console.log(count);
  fetchImage(count);
}

async function fetchImage(count) {
  const api = "https://picsum.photos/v2/list?limit=10&page=";
  let res = await fetch(api + count);
  let fi = await res.json();
  let data = fi;
  // console.log("data:", data);
  data.forEach(({ id, author, url, download_url, width, height }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "flex col-auto");
    div.innerHTML = `<div
            class="
              container
              bg-white
              rounded-xl
              shadow-lg
              transform
              transition
              duration-500
              hover:scale-105 hover:shadow-2xl
              h-max
              pb-2
            "
          >
            <img
              class="cursor-pointer"
              src=${download_url}
              alt="Sorry for that we can't able to get image"
            />
            <div class="flex mt-2 ml-2">
              <div class="flex space-x-9">
                <div class="flex space-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="
                        h-7
                        w-7
                        text-red-500
                        hover:text-red-400
                        transition
                        duration-100
                        cursor-pointer
                      "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>${width}</span>
                </div>
                <div class="flex space-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 text-gray-600 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <span>${height}</span>
                </div>
              
             
              </div>
            </div>
          </div>`;
    imageDiv.append(div);
  });
}

fetchImage(count);

//infinte scroll

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    getPage();
  }
});
