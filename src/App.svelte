<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
	export let name;
	export let motto;
	export let github;
	export let linkedin;
	export let twitter;
	export let features;
	export let mappings;
	export let installation_steps;

  function copyClipboardShow(el) {
    try {
      navigator.clipboard.writeText(document.querySelector('#' + el).textContent)
    } catch(err) {
      console.log(err)
    }
    console.log('copied')
    document.querySelector('#notify-' + el).classList.remove('hide')
    setTimeout(() => {
      document.querySelector('#notify-' + el).classList.add('hide')
    }, 2000);
  }

  function darkMode() {
    document.querySelector('body').classList.add('c-white', 'bgc-black')
    document.querySelector('.bi-toggle2-on').classList.remove('hide')
    document.querySelector('.bi-toggle2-off').classList.add('hide')
  }

  function lightMode() {
    document.querySelector('body').classList.remove('c-white', 'bgc-black')
    document.querySelector('.bi-toggle2-off').classList.remove('hide')
    document.querySelector('.bi-toggle2-on').classList.add('hide')
  }
</script>

<div class="panel bgc-teal sticky-top c-white">
  <div class="panel-wrapper wrapper-md">
    <span class="panel-brand"><a href="#intro">{name}</a></span>
    <nav class="d-flex">
      <ul class="c-list d-flex mr-15">
        <li class="list-item mr-5">
          <a href="#features">
            Features
          </a>
        </li>
        <li class="list-item mr-5">
          <a href="#mappings">
            Mappings
          </a>
        </li>
        <li class="list-item">
          <a href="#donate">
            Donate
          </a>
        </li>
      </ul>
      <ul class="d-flex">
        <li>
          <a href="{github}" target="_blank" rel=”noreferrer”>
            <i class="bi bi-github mr-5"></i>
          </a>
        </li>
        <li>
          <a href="{linkedin}" target="_blank" rel=”noreferrer”>
            <i class="bi bi-linkedin mr-5"></i>
          </a>
        </li>
        <li>
          <a href="{twitter}" target="_blank" rel=”noreferrer”>
            <i class="bi bi-twitter mr-10"></i>
          </a>
        </li>
        <li>
          <i class="bi bi-toggle2-off" on:click={darkMode} on:keyup={console.log('clicked')}></i>
        </li>
        <li>
          <i class="bi bi-toggle2-on hide" on:click={lightMode} on:keyup={console.log('clicked')}></i>
        </li>
      </ul>
    </nav>
  </div>
</div>

<header class="ta-center mb-0 pt-14" id="intro">
	<h1 class="title spacer-2xl">{name}</h1>
  <p class="lead spacer-4xl">{motto}</p>
  <a href="#get-started"><button class="btn bgc-teal spacer-7xl py-3 bd-none c-white">Get Started</button></a>
  <div class="wrapper-lg mx-auto">
    <video class="video responsive" src="/src/assets/video.mp4" loading="lazy" alt="video" autoplay muted loop></video>
  </div>
</header>

<section class="wrapper-md py-14" id="features">
  <h2 class="ta-center spacer-2xl">Features</h2>
  <div class="d-grid gtc-2 ta-center gg-30">
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

<section class="wrapper-md py-14" id="get-started">
  <h2 class="subtitle spacer-2xl ta-center">Getting Started</h2>
  <p class="lead spacer-xl ta-center">Easily get started with these 7 steps below</p>

  {#each installation_steps as step}
  <div class="spacer-4xl">
    <span class="span d-block spacer-sm">Step {step.id}</span>
    <span class="span d-block spacer-lg">{step.title}</span>
    <code class="code pos-relative d-block w-100% c-white" style="background-color: var(--limpio-brown-ltn-3) !important">
      <span class="bgc-brown-dkn-4 px-5 py-1 c-white pos-absolute t-neg-10 r-0 hide" id="notify-{step.class}">Copied</span>
      <span id="{step.class}">{step.code}</span>
      <i class="bi bi-clipboard pos-absolute r-2 t-2 fs-lg op-0.8 cur-pointer" on:click={copyClipboardShow(step.class)} on:keyup={console.log('clicked')}></i>
    </code>
  </div>
  {/each}
</section>

<section class="wrapper-md py-14" id="mappings">
  <h2 class="ta-center spacer-2xl">Mappings</h2>
  <p class="lead spacer-xl">The leader key is set to the <strong>space</strong> key. But you can obviously remap to any other key.</p>
  <p class="lead spacer-3xl"><strong>c-[key]</strong> means hold the control key plus the other key to trigger the command.</p>
  <table class="table responsive striped">
    <tr class="bgc-teal-ltn-1 c-white">
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

<section id="donate" class="py-14 ta-center bgc-teal c-white mb-0">
  <h2 class="subtitle">Donate</h2>
  <button class="btn bgc-white py-3 bd-none c-black">Donate</button>
</section>

<footer class="footer wrapper-md pt-5 ta-center">

  <span class="span d-block spacer-lg">&copy; &nbsp; Egg Nvim</span>

  <span class="span d-block spacer-lg"><i class="bi bi-geo-alt"></i>&nbsp; Limuru, Kenya</span>

  <span class="span d-block spacer-lg"></span>

  <nav class="d-flex jc-center">
    <ul class="d-flex">
      <li class="mr-2 vis-hidden">
        <i>msg</i>
      </li>
      <li>
        <a href="{github}" target="_blank" rel=”noreferrer”>
          <i class="bi bi-github mr-5"></i>
        </a>
      </li>
      <li>
        <a href="{linkedin}" target="_blank" rel=”noreferrer”>
          <i class="bi bi-linkedin mr-5"></i>
        </a>
      </li>
      <li>
        <a href="{twitter}" target="_blank" rel=”noreferrer”>
          <i class="bi bi-twitter mr-10"></i>
        </a>
      </li>
    </ul>

  </nav>

</footer>
