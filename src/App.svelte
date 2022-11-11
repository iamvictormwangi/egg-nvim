<script>
  export let name;
  export let motto;
  export let donations;
  export let github;
  export let linkedin;
  export let twitter;
  export let features;
  export let mappings;
  export let installation_steps;

  function copyClipboardShow(el) {
    try {
      navigator.clipboard.writeText(
        document.querySelector("#" + el).textContent
      );
    } catch (err) {
      console.log(err);
    }
    console.log("copied");
    document.querySelector("#notify-" + el).classList.remove("hide");
    setTimeout(() => {
      document.querySelector("#notify-" + el).classList.add("hide");
    }, 2000);
  }

  function darkMode() {
    document.querySelector("body").classList.add("c-white", "bgc-black");
    document.querySelector("#sun").classList.remove("hide");
    document.querySelector("#moon").classList.add("hide");
  }

  function lightMode() {
    document.querySelector("body").classList.remove("c-white", "bgc-black");
    document.querySelector("#sun").classList.add("hide");
    document.querySelector("#moon").classList.remove("hide");
  }
</script>

<div class="panel bgc-teal sticky-top c-white zi-1000">
  <div class="panel-wrapper wrapper-md">
    <div class="d-flex">
      <div class="hamberger @laptop-up-d-none mr-5">
        <div class="hamberger-bar" />
        <div class="hamberger-bar hamberger-bar-short" />
        <div class="hamberger-bar" />
      </div>
      <span class="panel-brand @laptop-up-mr-10 @tablet-down-pt-1"
        ><a href="#intro"><i class="fas fa-egg mr-4" />{name}</a></span
      >
      <nav class="d-flex @tablet-down-d-none">
        <ul class="c-list d-flex mr-15">
          <li class="list-item mr-5">
            <a href="#installation"> Installation </a>
          </li>
          <li class="list-item mr-5">
            <a href="#features"> Features </a>
          </li>
          <li class="list-item mr-5">
            <a href="#mappings"> Mappings </a>
          </li>
          <li class="list-item">
            <a href="#donate"> Donate </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="d-flex @tablet-down-pt-1">
      <li>
        <a href={github} rel="noreferrer" target="_blank">
          <i class="bi bi-github mr-5" />
        </a>
      </li>
      <li>
        <a href={linkedin} rel="noreferrer" target="_blank">
          <i class="bi bi-linkedin mr-5" />
        </a>
      </li>
      <li>
        <a href={twitter} rel="noreferrer" target="_blank">
          <i class="bi bi-twitter @tablet-up-mr-10 @mobile-mr-5" />
        </a>
      </li>
      <li>
        <i
          class="fas fa-moon cur-pointer"
          on:click={darkMode}
          id="moon"
          on:keyup={console.log("clicked")}
        />
      </li>
      <li>
        <i
          class="fas fa-sun hide cur-pointer"
          on:click={lightMode}
          id="sun"
          on:keyup={console.log("clicked")}
        />
      </li>
    </ul>
  </div>
</div>

<header class="ta-center mb-0 pt-14" id="intro">
  <h1 class="title spacer-2xl">{name}</h1>
  <p class="lead spacer-4xl">{motto}</p>
  <a href="#installation"
    ><button class="btn bgc-teal spacer-7xl py-3 bd-none c-white"
      >Installation</button
    ></a
  >
  <div class="wrapper-lg mx-auto">
    <video
      class="video responsive"
      src="/src/assets/video.mp4"
      loading="lazy"
      alt="video"
      autoplay
      muted
      loop
    />
  </div>
</header>

<section class="wrapper-md py-14" id="features">
  <h2 class="ta-center spacer-4xl">Features</h2>
  <div class="d-grid gg-30 @tablet-up-gtc-2 ta-center ">
    {#each features as feature}
      <article>
        <div class="box">
          <h4 class="list-item spacer-2xl">{feature.title}</h4>
          <p class="lead">{feature.msg}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="wrapper-md py-14" id="installation">
  <h2 class="subtitle spacer-2xl">Installation</h2>
  <p class="lead spacer-xl">Easily get started with these 7 steps below</p>

  {#each installation_steps as step}
    <div class="spacer-4xl">
      <span class="span d-block spacer-sm">Step {step.id}</span>
      <span class="span d-block spacer-lg">{step.title}</span>
      <code
        class="code pos-relative d-block c-white w-auto"
        style="background-color: var(--limpio-brown-ltn-3) !important"
      >
        <span
          class="bgc-brown-dkn-4 px-5 py-1 c-white pos-absolute t-neg-10 r-0 hide"
          id="notify-{step.class}">Copied</span
        >
        <span id={step.class} class="span mr-10%">{step.code}</span>
        <i
          class="fas fa-copy fs-lg op-0.8 cur-pointer pos-absolute r-4 t-3 @mobile-d-none"
          on:click={copyClipboardShow(step.class)}
          on:keyup={console.log("clicked")}
        />
      </code>
    </div>
  {/each}
</section>

<section class="wrapper-md py-14" id="mappings">
  <h2 class="spacer-2xl">Mappings</h2>
  <p class="lead spacer-xl">
    The leader key is set to the <strong>space</strong> key. But you can obviously
    remap to any other key.
  </p>
  <p class="lead spacer-3xl">
    <strong>Thus &lt;leader&gt;[key]</strong> means hitting the leader key which
    is spacer followed by a different key.
  </p>
  <p class="lead spacer-3xl">
    <strong>c-[key]</strong> means hold the control key plus the other key to trigger
    the command.
  </p>
  <table class="table responsive striped">
    <tr class="bgc-black c-white">
      <td>Key</td>
      <td>Command</td>
      <td>Mode</td>
    </tr>
    {#each mappings as map}
      <tr>
        <td>{map.keys}</td>
        <td>{map.command}</td>
        <td>{map.mode}</td>
      </tr>
    {/each}
  </table>
</section>

<section id="donate" class="py-14 ta-center mb-0 wrapper-md">
  <h2 class="subtitle">Donate</h2>
  <form class="form" method="POST">
    <div class="d-flex jc-space-between maw-68 mx-auto">
      <div>
        <label class="label mr-3" for="Donation">One time donation</label>
        <input class="input" type="checkbox" name="one-time-donation" />
      </div>
      <div>
        <label class="label mr-3" for="Donation">Monthly donation</label>
        <input class="input" type="checkbox" name="one-time-donation" />
      </div>
    </div>
  </form>
  <div class="card-group d-grid gtc-4 gg-10 spacer-xl">
    {#each donations as donation}
      <div class="card bd bd-1 p-5 cur-pointer">
        <div class="card-wrapper">
          <span>{donation.value}</span>
        </div>
      </div>
    {/each}
  </div>
  <script
    src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons"
  ></script>
  <button class="btn py-3 c-black">Paypal</button>
  <button class="btn py-3 c-black">Mpesa</button>
  <button class="btn py-3 c-black">MetaMask</button>

  <div id="paypal-button-container" />
</section>

<footer class="footer wrapper-md pt-5 ta-center">
  <span class="span d-block spacer-lg">&copy; &nbsp; Egg Nvim</span>

  <span class="span d-block spacer-lg"
    ><i class="bi bi-geo-alt" />&nbsp; Limuru, Kenya</span
  >

  <span class="span d-block spacer-lg" />

  <nav class="d-flex jc-center">
    <ul class="d-flex">
      <li class="mr-2 vis-hidden">
        <i>msg</i>
      </li>
      <li>
        <a href={github} rel="noreferrer" target="_blank">
          <i class="bi bi-github mr-5" />
        </a>
      </li>
      <li>
        <a href={linkedin} rel="noreferrer" target="_blank">
          <i class="bi bi-linkedin mr-5" />
        </a>
      </li>
      <li>
        <a href={twitter} rel="noreferrer" target="_blank">
          <i class="bi bi-twitter mr-10" />
        </a>
      </li>
    </ul>
  </nav>
</footer>

<style>
  code {
    padding: 1rem;
  }
  .hamberger-bar {
    background-color: var(--limpio-white);
  }
</style>
