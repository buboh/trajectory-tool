





<!DOCTYPE; html>
<html; lang="en">
  <head>
    <meta; charset="utf-8">



  <link; crossorigin="anonymous"; href="https://assets-cdn.github.com/assets/frameworks-19e26a1cefb5f1e92203a9468134dbf46b5a5308aeeeee09c96b32fec8c8b044.css"; integrity="sha256-GeJqHO+18ekiA6lGgTTb9GtaUwiu7u4JyWsy/sjIsEQ="; media="all"; rel="stylesheet" />
  <link; crossorigin="anonymous"; href="https://assets-cdn.github.com/assets/github-a97f6b98170262f1be5dd5b84d3fb788f1bb65b269c11417026fe763d5eeb63b.css"; integrity="sha256-qX9rmBcCYvG+XdW4TT+3iPG7ZbJpwRQXAm/nY9Xutjs="; media="all"; rel="stylesheet" />
  
  
  
  

  <meta; name="viewport"; content="width=device-width">
  
  <title>stats.js/stats.js; at; master; · mrdoob/stats.js</title>
  <link; rel="search"; type="application/opensearchdescription+xml"; href="/opensearch.xml"; title="GitHub">
  <link; rel="fluid-icon"; href="https://github.com/fluidicon.png"; title="GitHub">
  <meta; property="fb:app_id"; content="1401488693436528">

    
    <meta; content="https://avatars1.githubusercontent.com/u/97088?v=3&amp;s=400"; property="og:image" /><meta; content="GitHub"; property="og:site_name" /><meta; content="object"; property="og:type" /><meta; content="mrdoob/stats.js"; property="og:title" /><meta; content="https://github.com/mrdoob/stats.js"; property="og:url" /><meta; content="stats.js - JavaScript Performance Monitor"; property="og:description" />

  <link; rel="assets"; href="https://assets-cdn.github.com/">
  <link; rel="web-socket"; href="wss://live.github.com/_sockets/VjI6MTU3MjIzMDYyOmQwMDNlOTM0YjQ1ZDY2OTk0ODU1NjE1YWU2NWIxM2U1NWE0NjIyN2I2MTkwMmE2ZTEzODQ2MzYwYjZkZDcyNDA=--7a8e9514107d7d0f65ce72c6e987e2f9ea8d642b">
  <meta; name="pjax-timeout"; content="1000">
  <link; rel="sudo-modal"; href="/sessions/sudo_modal">
  <meta; name="request-id"; content="D06E:2753:2326DD4:37345B9:58BD48B8"; data-pjax-transient>
  

  <meta; name="selected-link"; value="repo_source"; data-pjax-transient>

  <meta; name="google-site-verification"; content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta; name="google-site-verification"; content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta; name="google-analytics"; content="UA-3769691-2">

<meta; content="collector.githubapp.com"; name="octolytics-host" /><meta; content="github"; name="octolytics-app-id" /><meta; content="https://collector.githubapp.com/github-external/browser_event"; name="octolytics-event-url" /><meta; content="D06E:2753:2326DD4:37345B9:58BD48B8"; name="octolytics-dimension-request_id" /><meta; content="25262241"; name="octolytics-actor-id" /><meta; content="buboh"; name="octolytics-actor-login" /><meta; content="d2f7254de92a0c5a1c6bb8091c6d62743b08aa61e9e1bc2afdcf9073036fe5bc"; name="octolytics-actor-hash" />
<meta; content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show"; data-pjax-transient="true"; name="analytics-location" />



  <meta; class="js-ga-set"; name="dimension1"; content="Logged In">



      <meta; name="hostname"; content="github.com">
  <meta; name="user-login"; content="buboh">

      <meta; name="expected-hostname"; content="github.com">
    <meta; name="js-proxy-site-detection-payload"; content="ZjdkNGZjNzFkMzljYThiMTZmNzA1MWQ2ZmRlOGY5NzNkMGNlNGM0MzY3NzhiNTVkYzA5NTYxNjE1Y2UyNzc5ZXx7InJlbW90ZV9hZGRyZXNzIjoiODAuMTEwLjQzLjIyOSIsInJlcXVlc3RfaWQiOiJEMDZFOjI3NTM6MjMyNkRENDozNzM0NUI5OjU4QkQ0OEI4IiwidGltZXN0YW1wIjoxNDg4Nzk5OTMyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta; name="html-safe-nonce"; content="7a3f1eec6c89e451396d89aadf42394ee0493f85">

  <meta; http-equiv="x-pjax-version"; content="11ea01c62849452917c88fc6d788a343">
  

    
  <meta; name="description"; content="stats.js - JavaScript Performance Monitor">
  <meta; name="go-import"; content="github.com/mrdoob/stats.js git https://github.com/mrdoob/stats.js.git">

  <meta; content="97088"; name="octolytics-dimension-user_id" /><meta; content="mrdoob"; name="octolytics-dimension-user_login" /><meta; content="600637"; name="octolytics-dimension-repository_id" /><meta; content="mrdoob/stats.js"; name="octolytics-dimension-repository_nwo" /><meta; content="true"; name="octolytics-dimension-repository_public" /><meta; content="false"; name="octolytics-dimension-repository_is_fork" /><meta; content="600637"; name="octolytics-dimension-repository_network_root_id" /><meta; content="mrdoob/stats.js"; name="octolytics-dimension-repository_network_root_nwo" />
  <link; href="https://github.com/mrdoob/stats.js/commits/master.atom"; rel="alternate"; title="Recent Commits to stats.js:master"; type="application/atom+xml">


    <link; rel="canonical"; href="https://github.com/mrdoob/stats.js/blob/master/build/stats.js"; data-pjax-transient>


  <meta; name="browser-stats-url"; content="https://api.github.com/_private/browser/stats">

  <meta; name="browser-errors-url"; content="https://api.github.com/_private/browser/errors">

  <link; rel="mask-icon"; href="https://assets-cdn.github.com/pinned-octocat.svg"; color="#000000">
  <link; rel="icon"; type="image/x-icon"; href="https://assets-cdn.github.com/favicon.ico">

<meta; name="theme-color"; content="#1e2327">


  <meta; name="u2f-support"; content="true">

  </head>

  <body; class="logged-in env-production windows vis-public page-blob">
    

  <div; class="position-relative js-header-wrapper ">
    <a; href="#start-of-content"; tabindex="1"; class="accessibility-aid js-skip-to-content">Skip; to; content</a>
    <div; id="js-pjax-loader-bar"; class="pjax-loader-bar"><div; class="progress"></div></div>

    
    
    



        <div; class="header"; role="banner">
  <div; class="container clearfix">

    <a; class="header-logo-invertocat"; href="https://github.com/"; data-hotkey="g d"; aria-label="Homepage"; data-ga-click="Header, go to dashboard, icon:logo">
  <svg; aria-hidden="true"; class="octicon octicon-mark-github"; height="32"; version="1.1"; viewBox="0 0 16 16"; width="32"><path; fill-rule="evenodd"; d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div; class="header-search scoped-search site-scoped-search js-site-search"; role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/search" class="js-site-search-form" data-scoped-search-url="/mrdoob/stats.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label; class="form-control header-search-wrapper js-chromeless-input-container">
      <div; class="header-search-scope">This; repository</div>
      <input; type="text";
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable";
        data-hotkey="s";
        name="q";
        placeholder="Search";
        aria-label="Search this repository";
        data-unscoped-placeholder="Search GitHub";
        data-scoped-placeholder="Search";
        autocapitalize="off">
    </label>
</form></div>


      <ul; class="header-nav float-left"; role="navigation">
        <li; class="header-nav-item">
          <a; href="/pulls"; aria-label="Pull requests you created"; class="js-selected-navigation-item header-nav-link"; data-ga-click="Header, click, Nav menu - item:pulls context:user"; data-hotkey="g p"; data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull; requests
</a>        </li>
        <li; class="header-nav-item">
          <a; href="/issues"; aria-label="Issues you created"; class="js-selected-navigation-item header-nav-link"; data-ga-click="Header, click, Nav menu - item:issues context:user"; data-hotkey="g i"; data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li; class="header-nav-item">
            <a; class="header-nav-link"; href="https://gist.github.com/"; data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul; class="header-nav user-nav float-right"; id="user-links">
  <li; class="header-nav-item">
    

  </li>

  <li; class="header-nav-item dropdown js-menu-container">
    <a; class="header-nav-link tooltipped tooltipped-s js-menu-target"; href="/new";
       aria-label="Create new…";
       data-ga-click="Header, create new, icon:add">
      <svg; aria-hidden="true"; class="octicon octicon-plus float-left"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span; class="dropdown-caret"></span>
    </a>

    <div; class="dropdown-menu-content js-menu-content">
      <ul; class="dropdown-menu dropdown-menu-sw">
        
<a; class="dropdown-item"; href="/new"; data-ga-click="Header, create new repository">
  New; repository
</a>

  <a; class="dropdown-item"; href="/new/import"; data-ga-click="Header, import a repository">
    Import; repository
  </a>

<a; class="dropdown-item"; href="https://gist.github.com/"; data-ga-click="Header, create new gist">
  New; gist
</a>

  <a; class="dropdown-item"; href="/organizations/new"; data-ga-click="Header, create new organization">
    New; organization
  </a>



  <div; class="dropdown-divider"></div>
  <div; class="dropdown-header">
    <span; title="mrdoob/stats.js">This; repository</span>
  </div>
    <a; class="dropdown-item"; href="/mrdoob/stats.js/issues/new"; data-ga-click="Header, create new issue">
      New; issue
    </a>

      </ul>
    </div>
  </li>

  <li; class="header-nav-item dropdown js-menu-container">
    <a; class="header-nav-link name tooltipped tooltipped-sw js-menu-target"; href="/buboh";
       aria-label="View profile and more";
       data-ga-click="Header, show menu, icon:avatar">
      <img; alt="@buboh"; class="avatar"; height="20"; src="https://avatars0.githubusercontent.com/u/25262241?v=3&amp;s=40"; width="20" />
      <span; class="dropdown-caret"></span>
    </a>

    <div; class="dropdown-menu-content js-menu-content">
      <div; class="dropdown-menu dropdown-menu-sw">
        <div; class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong; class="css-truncate-target">buboh</strong>
        </div>

        <div; class="dropdown-divider"></div>

        <a; class="dropdown-item"; href="/buboh"; data-ga-click="Header, go to profile, text:your profile">
          Your; profile
        </a>
        <a; class="dropdown-item"; href="/buboh?tab=stars"; data-ga-click="Header, go to starred repos, text:your stars">
          Your; stars
        </a>
        <a; class="dropdown-item"; href="/explore"; data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a; class="dropdown-item"; href="/integrations"; data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a; class="dropdown-item"; href="https://help.github.com"; data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div; class="dropdown-divider"></div>

        <a; class="dropdown-item"; href="/settings/profile"; data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UOCae6rzCq8kEmZQ7epIav0Ct++re8h18y+3h9CqvQUlW9j1KggLXTpgRINkHS3j82Gl0iaLrmEijDpMaYs3xg==" /></div>
          <button; type="submit"; class="dropdown-item dropdown-signout"; data-ga-click="Header, sign out, icon:logout">
            Sign; out
          </button>
</form>      </div>
    </div>
  </li>
</ul>

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xxeWfPmrvHHRludzto+2RWMEMc0beFfEQyJUSwS2+1eyrNTyeVC9g8/kxaA/eNPMbWcj8JaIMdCSgdmAvZdxlA==" /></div>
      <button; type="submit"; class="dropdown-item dropdown-signout"; data-ga-click="Header, sign out, icon:logout">
        Sign; out
      </button>
</form>
    
  </div>
</div>


      

  </div>

  <div; id="start-of-content"; class="accessibility-aid"></div>

    <div; id="js-flash-container">
</div>



  <div; role="main">
      <div; itemscope; itemtype="http://schema.org/SoftwareSourceCode">
    <div; id="js-repo-pjax-container"; data-pjax-container>
      


<div; class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div; class="container repohead-details-container">

    

<ul; class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="d7kgT+j9xQ4HnRcOdHUDbOVYPI+U6HiC64fwnGLNIaBPpCVfE07d2jiTAGxTZZ99OVWVjx8QndV33Z8HdhLFkg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="600637" />

        <div; class="select-menu js-menu-container js-select-menu">
          <a; href="/mrdoob/stats.js/subscription";
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"; role="button"; tabindex="0"; aria-haspopup="true";
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span; class="js-select-button">
              <svg; aria-hidden="true"; class="octicon octicon-eye"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a; class="social-count js-social-count";
            href="/mrdoob/stats.js/watchers";
            aria-label="164 users are watching this repository">
            164
          </a>

        <div; class="select-menu-modal-holder">
          <div; class="select-menu-modal subscription-menu-modal js-menu-content"; aria-hidden="true">
            <div; class="select-menu-header js-navigation-enable"; tabindex="-1">
              <svg; aria-label="Close"; class="octicon octicon-x js-menu-close"; height="16"; role="img"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span; class="select-menu-title">Notifications</span>
            </div>

              <div; class="select-menu-list js-navigation-container"; role="menu">

                <div; class="select-menu-item js-navigation-item selected"; role="menuitem"; tabindex="0">
                  <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div; class="select-menu-item-text">
                    <input; checked="checked"; id="do_included"; name="do"; type="radio"; value="included" />
                    <span; class="select-menu-item-heading">Not; watching</span>
                    <span; class="description">Be; notified; when; participating; or; @mentioned.</span>
                    <span; class="js-select-button-text hidden-select-button-text">
                      <svg; aria-hidden="true"; class="octicon octicon-eye"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div; class="select-menu-item js-navigation-item "; role="menuitem"; tabindex="0">
                  <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div; class="select-menu-item-text">
                    <input; id="do_subscribed"; name="do"; type="radio"; value="subscribed" />
                    <span; class="select-menu-item-heading">Watching</span>
                    <span; class="description">Be; notified; of; all; conversations.</span>
                    <span; class="js-select-button-text hidden-select-button-text">
                      <svg; aria-hidden="true"; class="octicon octicon-eye"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div; class="select-menu-item js-navigation-item "; role="menuitem"; tabindex="0">
                  <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div; class="select-menu-item-text">
                    <input; id="do_ignore"; name="do"; type="radio"; value="ignore" />
                    <span; class="select-menu-item-heading">Ignoring</span>
                    <span; class="description">Never; be; notified.</span>
                    <span; class="js-select-button-text hidden-select-button-text">
                      <svg; aria-hidden="true"; class="octicon octicon-mute"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop; ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div; class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7o3nm4b/DI/Kticv2mufFPX1CiSUeI1l/gbEVVrtmLDgXpqcZSEfRO/QahyX0MYMMM7xDzSch/DPHSb7p8LfUg==" /></div>
      <button;
        type="submit";
        class="btn btn-sm btn-with-count js-toggler-target";
        aria-label="Unstar this repository"; title="Unstar mrdoob/stats.js";
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg; aria-hidden="true"; class="octicon octicon-star"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a; class="social-count js-social-count"; href="/mrdoob/stats.js/stargazers";
           aria-label="3908 users starred this repository">
          3,908
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nuOS3ZeAse6j2McvT1g9SgppLDG5GvXKFUOW2OUzepWsiYND+RnlB85LJvf3WAj+A0iFGQfmeKxCE4BnAl9ykg==" /></div>
      <button;
        type="submit";
        class="btn btn-sm btn-with-count js-toggler-target";
        aria-label="Star this repository"; title="Star mrdoob/stats.js";
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg; aria-hidden="true"; class="octicon octicon-star"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a; class="social-count js-social-count"; href="/mrdoob/stats.js/stargazers";
           aria-label="3908 users starred this repository">
          3,908
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Vm7dtE2tCJcOYOiTcDk3Dze6EWjn9A8PEeYKxnL4+G59+Fz8kuFFDQEbXCHio97gcRyRVK0J5OUVizP2UhT6Jg==" /></div>
            <button;
                type="submit";
                class="btn btn-sm btn-with-count";
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork";
                title="Fork your own copy of mrdoob/stats.js to your account";
                aria-label="Fork your own copy of mrdoob/stats.js to your account">
              <svg; aria-hidden="true"; class="octicon octicon-repo-forked"; height="16"; version="1.1"; viewBox="0 0 10 16"; width="10"><path; fill-rule="evenodd"; d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a; href="/mrdoob/stats.js/network"; class="social-count";
       aria-label="533 users forked this repository">
      533
    </a>
  </li>
</ul>

    <h1; class="public ">
  <svg; aria-hidden="true"; class="octicon octicon-repo"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span; class="author"; itemprop="author"><a; href="/mrdoob"; class="url fn"; rel="author">mrdoob</a></span><!--
--><span; class="path-divider">/</span><!--
--><strong; itemprop="name"><a; href="/mrdoob/stats.js"; data-pjax="#js-repo-pjax-container">stats.js</a></strong>

</h1>

  </div>
  <div; class="container">
    
<nav; class="reponav js-repo-nav js-sidenav-container-pjax";
     itemscope;
     itemtype="http://schema.org/BreadcrumbList";
     role="navigation";
     data-pjax="#js-repo-pjax-container">

  <span; itemscope; itemtype="http://schema.org/ListItem"; itemprop="itemListElement">
    <a; href="/mrdoob/stats.js"; class="js-selected-navigation-item selected reponav-item"; data-hotkey="g c"; data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mrdoob/stats.js"; itemprop="url">
      <svg; aria-hidden="true"; class="octicon octicon-code"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span; itemprop="name">Code</span>
      <meta; itemprop="position"; content="1">
</a>  </span>

    <span; itemscope; itemtype="http://schema.org/ListItem"; itemprop="itemListElement">
      <a; href="/mrdoob/stats.js/issues"; class="js-selected-navigation-item reponav-item"; data-hotkey="g i"; data-selected-links="repo_issues repo_labels repo_milestones /mrdoob/stats.js/issues"; itemprop="url">
        <svg; aria-hidden="true"; class="octicon octicon-issue-opened"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span; itemprop="name">Issues</span>
        <span; class="counter">5</span>
        <meta; itemprop="position"; content="2">
</a>    </span>

  <span; itemscope; itemtype="http://schema.org/ListItem"; itemprop="itemListElement">
    <a; href="/mrdoob/stats.js/pulls"; class="js-selected-navigation-item reponav-item"; data-hotkey="g p"; data-selected-links="repo_pulls /mrdoob/stats.js/pulls"; itemprop="url">
      <svg; aria-hidden="true"; class="octicon octicon-git-pull-request"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span; itemprop="name">Pull; requests</span>
      <span; class="counter">10</span>
      <meta; itemprop="position"; content="3">
</a>  </span>

  <a; href="/mrdoob/stats.js/projects"; class="js-selected-navigation-item reponav-item"; data-selected-links="repo_projects new_repo_project repo_project /mrdoob/stats.js/projects">
    <svg; aria-hidden="true"; class="octicon octicon-project"; height="16"; version="1.1"; viewBox="0 0 15 16"; width="15"><path; fill-rule="evenodd"; d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span; class="counter">0</span>
</a>


  <a; href="/mrdoob/stats.js/pulse"; class="js-selected-navigation-item reponav-item"; data-selected-links="pulse /mrdoob/stats.js/pulse">
    <svg; aria-hidden="true"; class="octicon octicon-pulse"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a; href="/mrdoob/stats.js/graphs"; class="js-selected-navigation-item reponav-item"; data-selected-links="repo_graphs repo_contributors /mrdoob/stats.js/graphs">
    <svg; aria-hidden="true"; class="octicon octicon-graph"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div; class="container new-discussion-timeline experiment-repo-nav">
  <div; class="repository-content">

    

<a; href="/mrdoob/stats.js/blob/066cb4e8cf9e1c8c7bbc501a9a325f707a2b1cb4/build/stats.js"; class="d-none js-permalink-shortcut"; data-hotkey="y">Permalink</a>

<!-- blob; contrib; 0fcc12c7dd4088b205d1360e1d418340 -->

<div;; class="file-navigation js-zeroclipboard-container">
  
<div; class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button; class="btn btn-sm select-menu-button js-menu-target css-truncate"; data-hotkey="w";
    
    type="button"; aria-label="Switch branches or tags"; tabindex="0"; aria-haspopup="true">
    <i>Branch:</i>
    <span; class="js-select-button css-truncate-target">master</span>
  </button>

  <div; class="select-menu-modal-holder js-menu-content js-navigation-container"; data-pjax; aria-hidden="true">

    <div; class="select-menu-modal">
      <div; class="select-menu-header">
        <svg; aria-label="Close"; class="octicon octicon-x js-menu-close"; height="16"; role="img"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span; class="select-menu-title">Switch; branches/tags</span>
      </div>

      <div; class="select-menu-filters">
        <div; class="select-menu-text-filter">
          <input; type="text"; aria-label="Filter branches/tags"; id="context-commitish-filter-field"; class="form-control js-filterable-field js-navigation-enable"; placeholder="Filter branches/tags">
        </div>
        <div; class="select-menu-tabs">
          <ul>
            <li; class="select-menu-tab">
              <a; href="#"; data-tab-filter="branches"; data-filter-placeholder="Filter branches/tags"; class="js-select-menu-tab"; role="tab">Branches</a>
            </li>
            <li; class="select-menu-tab">
              <a; href="#"; data-tab-filter="tags"; data-filter-placeholder="Find a tag…"; class="js-select-menu-tab"; role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div; class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket"; data-tab-filter="branches"; role="menu">

        <div; data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a; class="select-menu-item js-navigation-item js-navigation-open selected";
               href="/mrdoob/stats.js/blob/master/build/stats.js";
               data-name="master";
               data-skip-pjax="true";
               rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div; class="select-menu-no-results">Nothing; to; show</div>
      </div>

      <div; class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket"; data-tab-filter="tags">
        <div; data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r17/build/stats.js";
              data-name="r17";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r17">
                r17
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r16/build/stats.js";
              data-name="r16";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r16">
                r16
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r15/build/stats.js";
              data-name="r15";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r15">
                r15
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r14/build/stats.js";
              data-name="r14";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r14">
                r14
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r13/build/stats.js";
              data-name="r13";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r13">
                r13
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r12/build/stats.js";
              data-name="r12";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r12">
                r12
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r11/build/stats.js";
              data-name="r11";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r11">
                r11
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r10/build/stats.js";
              data-name="r10";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r10">
                r10
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r9/build/stats.js";
              data-name="r9";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r9">
                r9
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r8/build/stats.js";
              data-name="r8";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r8">
                r8
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r7/build/stats.js";
              data-name="r7";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r7">
                r7
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r6/build/stats.js";
              data-name="r6";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r6">
                r6
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r5/build/stats.js";
              data-name="r5";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r5">
                r5
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r4/build/stats.js";
              data-name="r4";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r4">
                r4
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r3/build/stats.js";
              data-name="r3";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r3">
                r3
              </span>
            </a>
            <a; class="select-menu-item js-navigation-item js-navigation-open ";
              href="/mrdoob/stats.js/tree/r2/build/stats.js";
              data-name="r2";
              data-skip-pjax="true";
              rel="nofollow">
              <svg; aria-hidden="true"; class="octicon octicon-check select-menu-item-icon"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span; class="select-menu-item-text css-truncate-target"; title="r2">
                r2
              </span>
            </a>
        </div>

        <div; class="select-menu-no-results">Nothing; to; show</div>
      </div>

    </div>
  </div>
</div>

  <div; class="BtnGroup float-right">
    <a; href="/mrdoob/stats.js/find/master";
          class="js-pjax-capture-input btn btn-sm BtnGroup-item";
          data-pjax;
          data-hotkey="t">
      Find; file
    </a>
    <button; aria-label="Copy file path to clipboard"; class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s"; data-copied-hint="Copied!"; type="button">Copy; path</button>
  </div>
  <div; class="breadcrumb js-zeroclipboard-target">
    <span; class="repo-root js-repo-root"><span; class="js-path-segment"><a; href="/mrdoob/stats.js"><span>stats.js</span></a></span></span><span; class="separator">/</span><span; class="js-path-segment"><a; href="/mrdoob/stats.js/tree/master/build"><span>build</span></a></span><span; class="separator">/</span><strong; class="final-path">stats.js</strong>
  </div>
</div>


  <div; class="commit-tease">
      <span; class="float-right">
        <a; class="commit-tease-sha"; href="/mrdoob/stats.js/commit/457b6bd205f3054f0337fdd917c18ed755983a9d"; data-pjax>
          457b6bd
        </a>
        <relative-time;; datetime="2016-11-05T00:31:40Z">Nov; 5, 2016</relative-time>
      </span>
      <div>
        <img; alt="@terkelg"; class="avatar"; height="20"; src="https://avatars1.githubusercontent.com/u/2302254?v=3&amp;s=40"; width="20" />
        <a; href="/terkelg"; class="user-mention"; rel="contributor">terkelg</a>
          <a; href="/mrdoob/stats.js/commit/457b6bd205f3054f0337fdd917c18ed755983a9d"; class="message"; data-pjax="true"; title="Add none minified version for bower (#73)

* Add; none; minified; version; for bower

* Removed unused scripts; and; added; new closure; build

* link; to; build">Add none minified version for bower (</a><a href=";https://github.com/mrdoob/stats.js/pull/73" class="issue-link js-issue-link" data-url="https://github.com/mrdoob/stats.js/issues/73" data-id="187462063" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#73</a><a href="/mrdoob/stats.js/commit/457b6bd205f3054f0337fdd917c18ed755983a9d" class="message" data-pjax="true" title="Add none minified version for bower (#73)

*; Add; none; minified; version; for bower

* Removed unused scripts; and; added; new closure; build

* link; to; build">)</a>
      </div>

    <div;; class="commit-tease-contributors">
      <button; type="button"; class="btn-link muted-link contributors-toggle"; data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a; class="avatar-link tooltipped tooltipped-s"; aria-label="mrdoob"; href="/mrdoob/stats.js/commits/master/build/stats.js?author=mrdoob"><img; alt="@mrdoob"; class="avatar"; height="20"; src="https://avatars3.githubusercontent.com/u/97088?v=3&amp;s=40"; width="20" /> </a>
    <a; class="avatar-link tooltipped tooltipped-s"; aria-label="terkelg"; href="/mrdoob/stats.js/commits/master/build/stats.js?author=terkelg"><img; alt="@terkelg"; class="avatar"; height="20"; src="https://avatars1.githubusercontent.com/u/2302254?v=3&amp;s=40"; width="20" /> </a>


    </div>

    <div; id="blob_contributors_box"; style="display:none">
      <h2; class="facebox-header"; data-facebox-id="facebox-header">Users; who; have; contributed; to; this; file</h2>
      <ul; class="facebox-user-list"; data-facebox-id="facebox-description">
          <li; class="facebox-user-list-item">
            <img; alt="@mrdoob"; height="24"; src="https://avatars1.githubusercontent.com/u/97088?v=3&amp;s=48"; width="24" />
            <a; href="/mrdoob">mrdoob</a>
          </li>
          <li; class="facebox-user-list-item">
            <img; alt="@terkelg"; height="24"; src="https://avatars3.githubusercontent.com/u/2302254?v=3&amp;s=48"; width="24" />
            <a; href="/terkelg">terkelg</a>
          </li>
      </ul>
    </div>
  </div>


<div; class="file">
  <div; class="file-header">
  <div; class="file-actions">

    <div; class="BtnGroup">
      <a; href="/mrdoob/stats.js/raw/master/build/stats.js"; class="btn btn-sm BtnGroup-item"; id="raw-url">Raw</a>
        <a; href="/mrdoob/stats.js/blame/master/build/stats.js"; class="btn btn-sm js-update-url-with-hash BtnGroup-item"; data-hotkey="b">Blame</a>
      <a; href="/mrdoob/stats.js/commits/master/build/stats.js"; class="btn btn-sm BtnGroup-item"; rel="nofollow">History</a>
    </div>

        <a; class="btn-octicon tooltipped tooltipped-nw";
           href="github-windows://openRepo/https://github.com/mrdoob/stats.js?branch=master&amp;filepath=build%2Fstats.js";
           aria-label="Open this file in GitHub Desktop";
           data-ga-click="Repository, open with desktop, type:windows">
            <svg; aria-hidden="true"; class="octicon octicon-device-desktop"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/edit/master/build/stats.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IxVQbJR0rOU1jKLBm8sztiNRoD8PokHVfWfyjt1hlrmca3Tfa4QjBrq+ULqCKv7PqTDNUZbiGb/3Wqp6+WogmA==" /></div>
          <button; class="btn-octicon tooltipped tooltipped-nw"; type="submit";
            aria-label="Fork this project and edit the file"; data-hotkey="e"; data-disable-with>;
            <svg; aria-hidden="true"; class="octicon octicon-pencil"; height="16"; version="1.1"; viewBox="0 0 14 16"; width="14"><path; fill-rule="evenodd"; d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mrdoob/stats.js/delete/master/build/stats.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dHUUBjECoBoBMGh3Te3oElJUZJ8P2/loBfC3Kn6M7wVTE7GHAG3DeFczSy6tbRNQxB0W1GhnqxkQElU8UOu10g==" /></div>
          <button; class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw"; type="submit";
            aria-label="Fork this project and delete the file"; data-disable-with>;
            <svg; aria-hidden="true"; class="octicon octicon-trashcan"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div; class="file-info">
      180; lines (108; sloc)
      <span; class="file-info-divider"></span>
    3.73; KB
  </div>
</div>

  

  <div; itemprop="text"; class="blob-wrapper data type-javascript">
      <table; class="highlight tab-size js-file-line-container"; data-tab-size="8">
      <tr>
        <td; id="L1"; class="blob-num js-line-number"; data-line-number="1"></td>
        <td; id="LC1"; class="blob-code blob-code-inner js-file-line">(<span; class="pl-k">function</span> (<span; class="pl-c1">global</span>,; <span; class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td; id="L2"; class="blob-num js-line-number"; data-line-number="2"></td>
        <td; id="LC2"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">typeof</span> <span; class="pl-c1">exports</span> <span; class="pl-k">===</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>object<span; class="pl-pds">&#39;</span></span> <span; class="pl-k">&amp;&amp;</span> <span; class="pl-k">typeof</span> <span; class="pl-c1">module</span> <span; class="pl-k">!==</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>undefined<span; class="pl-pds">&#39;</span></span> <span; class="pl-k">?</span> <span; class="pl-c1">module</span>.<span; class="pl-smi">exports</span> <span; class="pl-k">=</span> <span; class="pl-en">factory</span>() <span; class="pl-k">:</span></td>
      </tr>
      <tr>
        <td; id="L3"; class="blob-num js-line-number"; data-line-number="3"></td>
        <td; id="LC3"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">typeof</span> define <span; class="pl-k">===</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>function<span; class="pl-pds">&#39;</span></span> <span; class="pl-k">&amp;&amp;</span> <span; class="pl-smi">define</span>.<span; class="pl-smi">amd</span> <span; class="pl-k">?</span> <span; class="pl-en">define</span>(factory) <span; class="pl-k">:</span></td>
      </tr>
      <tr>
        <td; id="L4"; class="blob-num js-line-number"; data-line-number="4"></td>
    < td;
    id = "LC4";
class
    = "blob-code blob-code-inner js-file-line" > ( < span;
class
    = "pl-c1" > global < / span >
.<
    span;
class
    = "pl-smi" > Stats < / span > < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-en" > factory < / span > ()
)</
    td >
    </tr>
      <tr>
        <td; id="L5"; class="blob-num js-line-number"; data-line-number="5"></td>
        <td; id="LC5"; class="blob-code blob-code-inner js-file-line">};;;;;;;;;;;;;;(<span; class="pl-c1">this</span>, (<span; class="pl-k">function</span> (); { <span; class="pl-s"><span; class="pl-pds">&#39;</span>use; strict<span; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L6"; class="blob-num js-line-number"; data-line-number="6"></td>
        <td; id="LC6"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L7"; class="blob-num js-line-number"; data-line-number="7"></td>
        <td; id="LC7"; class="blob-code blob-code-inner js-file-line"><span; class="pl-c"><span; class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@author</span> mrdoob / http://mrdoob.com/</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td; id="L10"; class="blob-num js-line-number"; data-line-number="10"></td>
        <td; id="LC10"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L11"; class="blob-num js-line-number"; data-line-number="11"></td>
        <td; id="LC11"; class="blob-code blob-code-inner js-file-line"><span; class="pl-k">var<;/span> <span; class="pl-en">Stats</span> <span; class="pl-k">=</span> <span; class="pl-k">function</span> (); {</td>
      </tr>
      <tr>
        <td; id="L12"; class="blob-num js-line-number"; data-line-number="12"></td>
        <td; id="LC12"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L13"; class="blob-num js-line-number"; data-line-number="13"></td>
        <td; id="LC13"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">var<;/span> mode <span; class="pl-k">=</span> <span; class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td; id="L14"; class="blob-num js-line-number"; data-line-number="14"></td>
        <td; id="LC14"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L15"; class="blob-num js-line-number"; data-line-number="15"></td>
    < td;
    id = "LC15";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > container < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-c1" > document < / span >
.<
    span;
class
    = "pl-c1" > createElement < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > div < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L16"; class="blob-num js-line-number"; data-line-number="16"></td>
        <td; id="LC16"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">container</span>.<span; class="pl-c1">style</span>.<span; class="pl-smi">cssText</span> <span; class="pl-k">=</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>position:fixed;0;0;pointer;0.9;z-index:10000<span; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L17"; class="blob-num js-line-number"; data-line-number="17"></td>
        <td; id="LC17"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">container</span>.<span; class="pl-c1">addEventListener</span>( <span; class="pl-s"><span; class="pl-pds">&#39;</span>click<span; class="pl-pds">&#39;</span></span>,; <span; class="pl-k">function</span> ( <span; class="pl-c1">event</span>; ) {</td>
      </tr>
      <tr>
        <td; id="L18"; class="blob-num js-line-number"; data-line-number="18"></td>
        <td; id="LC18"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L19"; class="blob-num js-line-number"; data-line-number="19"></td>
        <td; id="LC19"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-c1">event</span>.<span; class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td; id="L20"; class="blob-num js-line-number"; data-line-number="20"></td>
    < td;
    id = "LC20";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-en" > showPanel < / span > ( < span;
class
    = "pl-k" > ++ < / span > mode < span;
class
    = "pl-k" > % < / span > < span;
class
    = "pl-smi" > container < / span >
.<
    span;
class
    = "pl-smi" > children < / span >
.<
    span;
class
    = "pl-c1" > length < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L21"; class="blob-num js-line-number"; data-line-number="21"></td>
        <td; id="LC21"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L22"; class="blob-num js-line-number"; data-line-number="22"></td>
    < td;
    id = "LC22";
class
    = "blob-code blob-code-inner js-file-line" >
};;;
, <
    span;
class
    = "pl-c1" > false < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L23"; class="blob-num js-line-number"; data-line-number="23"></td>
        <td; id="LC23"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L24"; class="blob-num js-line-number"; data-line-number="24"></td>
        <td; id="LC24"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-c"><span; class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td; id="L25"; class="blob-num js-line-number"; data-line-number="25"></td>
        <td; id="LC25"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L26"; class="blob-num js-line-number"; data-line-number="26"></td>
        <td; id="LC26"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">function</span> <span; class="pl-en">addPanel</span>( <span; class="pl-smi">panel</span>; ) {</td>
      </tr>
      <tr>
        <td; id="L27"; class="blob-num js-line-number"; data-line-number="27"></td>
        <td; id="LC27"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L28"; class="blob-num js-line-number"; data-line-number="28"></td>
    < td;
    id = "LC28";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > container < / span >
.<
    span;
class
    = "pl-c1" > appendChild < / span > ( < span;
class
    = "pl-smi" > panel < / span >
.<
    span;
class
    = "pl-smi" > dom < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L29"; class="blob-num js-line-number"; data-line-number="29"></td>
        <td; id="LC29"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-k">return;</span> panel;</td>
      </tr>
      <tr>
        <td; id="L30"; class="blob-num js-line-number"; data-line-number="30"></td>
        <td; id="LC30"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L31"; class="blob-num js-line-number"; data-line-number="31"></td>
        <td; id="LC31"; class="blob-code blob-code-inner js-file-line">	};;;</td>
      </tr>
      <tr>
        <td; id="L32"; class="blob-num js-line-number"; data-line-number="32"></td>
        <td; id="LC32"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L33"; class="blob-num js-line-number"; data-line-number="33"></td>
        <td; id="LC33"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">function</span> <span; class="pl-en">showPanel</span>( <span; class="pl-smi">id</span>; ) {</td>
      </tr>
      <tr>
        <td; id="L34"; class="blob-num js-line-number"; data-line-number="34"></td>
        <td; id="LC34"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L35"; class="blob-num js-line-number"; data-line-number="35"></td>
        <td; id="LC35"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-k">for<;/span> ( <span; class="pl-k">var<;/span> i <span; class="pl-k">=</span> <span; class="pl-c1">0</span>; i <span; class="pl-k">&lt;</span> <span; class="pl-smi">container</span>.<span; class="pl-smi">children</span>.<span; class="pl-c1">length</span>; i <span; class="pl-k">++</span>; );;;;;;;;;;;;;; {</td>
      </tr>
      <tr>
        <td; id="L36"; class="blob-num js-line-number"; data-line-number="36"></td>
        <td; id="LC36"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L37"; class="blob-num js-line-number"; data-line-number="37"></td>
        <td; id="LC37"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">container</span>.<span; class="pl-smi">children</span>[ i ].<span; class="pl-c1">style</span>.<span; class="pl-c1">display</span> <span; class="pl-k">=</span> i <span; class="pl-k">===</span> id <span; class="pl-k">?</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>block<span; class="pl-pds">&#39;</span></span> <span; class="pl-k">:</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>none<span; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L38"; class="blob-num js-line-number"; data-line-number="38"></td>
        <td; id="LC38"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L39"; class="blob-num js-line-number"; data-line-number="39"></td>
        <td; id="LC39"; class="blob-code blob-code-inner js-file-line">		};;;;;;;;</td>
      </tr>
      <tr>
        <td; id="L40"; class="blob-num js-line-number"; data-line-number="40"></td>
        <td; id="LC40"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L41"; class="blob-num js-line-number"; data-line-number="41"></td>
        <td; id="LC41"; class="blob-code blob-code-inner js-file-line">		mode <span; class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td; id="L42"; class="blob-num js-line-number"; data-line-number="42"></td>
        <td; id="LC42"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L43"; class="blob-num js-line-number"; data-line-number="43"></td>
        <td; id="LC43"; class="blob-code blob-code-inner js-file-line">	};;;</td>
      </tr>
      <tr>
        <td; id="L44"; class="blob-num js-line-number"; data-line-number="44"></td>
        <td; id="LC44"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L45"; class="blob-num js-line-number"; data-line-number="45"></td>
        <td; id="LC45"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-c"><span; class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td; id="L46"; class="blob-num js-line-number"; data-line-number="46"></td>
        <td; id="LC46"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L47"; class="blob-num js-line-number"; data-line-number="47"></td>
        <td; id="LC47"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">var<;/span> beginTime <span; class="pl-k">=</span> ( <span; class="pl-c1">performance</span> <span; class="pl-k">||</span> <span; class="pl-c1">Date</span>; ).<span; class="pl-en">now</span>(), prevTime <span; class="pl-k">=</span> beginTime, frames <span; class="pl-k">=</span> <span; class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td; id="L48"; class="blob-num js-line-number"; data-line-number="48"></td>
        <td; id="LC48"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L49"; class="blob-num js-line-number"; data-line-number="49"></td>
    < td;
    id = "LC49";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > fpsPanel < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-en" > addPanel < / span > ( < span;
class
    = "pl-k" > new < / span > < span;
class
    = "pl-en" > Stats.Panel < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > FPS < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#0
    ff < span;;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#002 < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
) )</
    td >
    </tr>
      <tr>
        <td; id="L50"; class="blob-num js-line-number"; data-line-number="50"></td>
    < td;
    id = "LC50";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > msPanel < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-en" > addPanel < / span > ( < span;
class
    = "pl-k" > new < / span > < span;
class
    = "pl-en" > Stats.Panel < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > MS < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#0
    f0 < span;;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#020 < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
) )</
    td >
    </tr>
      <tr>
        <td; id="L51"; class="blob-num js-line-number"; data-line-number="51"></td>
        <td; id="LC51"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L52"; class="blob-num js-line-number"; data-line-number="52"></td>
        <td; id="LC52"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">if<;/span> ( <span; class="pl-smi">self</span>.<span; class="pl-smi">performance</span> <span; class="pl-k">&amp;&amp;</span> <span; class="pl-smi">self</span>.<span; class="pl-smi">performance</span>.<span; class="pl-smi">memory</span>; );;;;;;;;;;;;;;;;;;; {</td>
      </tr>
      <tr>
        <td; id="L53"; class="blob-num js-line-number"; data-line-number="53"></td>
        <td; id="LC53"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L54"; class="blob-num js-line-number"; data-line-number="54"></td>
    < td;
    id = "LC54";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > memPanel < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-en" > addPanel < / span > ( < span;
class
    = "pl-k" > new < / span > < span;
class
    = "pl-en" > Stats.Panel < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > MB < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#f08 < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >#201 < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
) )</
    td >
    </tr>
      <tr>
        <td; id="L55"; class="blob-num js-line-number"; data-line-number="55"></td>
        <td; id="LC55"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L56"; class="blob-num js-line-number"; data-line-number="56"></td>
        <td; id="LC56"; class="blob-code blob-code-inner js-file-line">	};;;;;;;;;</td>
      </tr>
      <tr>
        <td; id="L57"; class="blob-num js-line-number"; data-line-number="57"></td>
        <td; id="LC57"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L58"; class="blob-num js-line-number"; data-line-number="58"></td>
    < td;
    id = "LC58";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-en" > showPanel < / span > ( < span;
class
    = "pl-c1" > 0 < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L59"; class="blob-num js-line-number"; data-line-number="59"></td>
        <td; id="LC59"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L60"; class="blob-num js-line-number"; data-line-number="60"></td>
        <td; id="LC60"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">return;</span> {</td>
      </tr>
      <tr>
        <td; id="L61"; class="blob-num js-line-number"; data-line-number="61"></td>
        <td; id="LC61"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L62"; class="blob-num js-line-number"; data-line-number="62"></td>
        <td; id="LC62"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-c1">REVISION</span><span; class="pl-k">:</span> <span; class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td; id="L63"; class="blob-num js-line-number"; data-line-number="63"></td>
        <td; id="LC63"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L64"; class="blob-num js-line-number"; data-line-number="64"></td>
        <td; id="LC64"; class="blob-code blob-code-inner js-file-line">		dom<span; class="pl-k">:</span> container,</td>
      </tr>
      <tr>
        <td; id="L65"; class="blob-num js-line-number"; data-line-number="65"></td>
        <td; id="LC65"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L66"; class="blob-num js-line-number"; data-line-number="66"></td>
        <td; id="LC66"; class="blob-code blob-code-inner js-file-line">		addPanel<span; class="pl-k">:</span> addPanel,</td>
      </tr>
      <tr>
        <td; id="L67"; class="blob-num js-line-number"; data-line-number="67"></td>
        <td; id="LC67"; class="blob-code blob-code-inner js-file-line">		showPanel<span; class="pl-k">:</span> showPanel,</td>
      </tr>
      <tr>
        <td; id="L68"; class="blob-num js-line-number"; data-line-number="68"></td>
        <td; id="LC68"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L69"; class="blob-num js-line-number"; data-line-number="69"></td>
        <td; id="LC69"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-en">begin</span><span; class="pl-k">:</span> <span; class="pl-k">function</span> (); {</td>
      </tr>
      <tr>
        <td; id="L70"; class="blob-num js-line-number"; data-line-number="70"></td>
        <td; id="LC70"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L71"; class="blob-num js-line-number"; data-line-number="71"></td>
        <td; id="LC71"; class="blob-code blob-code-inner js-file-line">			beginTime <span; class="pl-k">=</span> ( <span; class="pl-c1">performance</span> <span; class="pl-k">||</span> <span; class="pl-c1">Date</span>; ).<span; class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td; id="L72"; class="blob-num js-line-number"; data-line-number="72"></td>
        <td; id="LC72"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L73"; class="blob-num js-line-number"; data-line-number="73"></td>
        <td; id="LC73"; class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td; id="L74"; class="blob-num js-line-number"; data-line-number="74"></td>
        <td; id="LC74"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L75"; class="blob-num js-line-number"; data-line-number="75"></td>
        <td; id="LC75"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-en">end</span><span; class="pl-k">:</span> <span; class="pl-k">function</span> (); {</td>
      </tr>
      <tr>
        <td; id="L76"; class="blob-num js-line-number"; data-line-number="76"></td>
        <td; id="LC76"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L77"; class="blob-num js-line-number"; data-line-number="77"></td>
        <td; id="LC77"; class="blob-code blob-code-inner js-file-line">			frames <span; class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td; id="L78"; class="blob-num js-line-number"; data-line-number="78"></td>
        <td; id="LC78"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L79"; class="blob-num js-line-number"; data-line-number="79"></td>
        <td; id="LC79"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-k">var<;/span> time <span; class="pl-k">=</span> ( <span; class="pl-c1">performance</span> <span; class="pl-k">||</span> <span; class="pl-c1">Date</span>; ).<span; class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td; id="L80"; class="blob-num js-line-number"; data-line-number="80"></td>
        <td; id="LC80"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L81"; class="blob-num js-line-number"; data-line-number="81"></td>
    < td;
    id = "LC81";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > msPanel < / span >
.<
    span;
class
    = "pl-en" > update < / span > ( time < span;
class
    = "pl-k" > - < / span > beginTime,;
<
    span;
class
    = "pl-c1" > 200 < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L82"; class="blob-num js-line-number"; data-line-number="82"></td>
        <td; id="LC82"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L83"; class="blob-num js-line-number"; data-line-number="83"></td>
        <td; id="LC83"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-k">if<;/span> ( time <span; class="pl-k">&gt;</span> prevTime <span; class="pl-k">+</span> <span; class="pl-c1">1000</span>; );;; {</td>
      </tr>
      <tr>
        <td; id="L84"; class="blob-num js-line-number"; data-line-number="84"></td>
        <td; id="LC84"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L85"; class="blob-num js-line-number"; data-line-number="85"></td>
    < td;
    id = "LC85";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > fpsPanel < / span >
.<
    span;
class
    = "pl-en" > update < / span > ( ( frames < span;
class
    = "pl-k" > * < / span > < span;
class
    = "pl-c1" > 1000 < / span >;
) <
    span;
class
    = "pl-k" > / < / span > ( time < span;
class
    = "pl-k" > - < / span > prevTime
), <
    span;
class
    = "pl-c1" > 100 < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L86"; class="blob-num js-line-number"; data-line-number="86"></td>
        <td; id="LC86"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L87"; class="blob-num js-line-number"; data-line-number="87"></td>
        <td; id="LC87"; class="blob-code blob-code-inner js-file-line">				prevTime <span; class="pl-k">=</span> time;</td>
      </tr>
      <tr>
        <td; id="L88"; class="blob-num js-line-number"; data-line-number="88"></td>
        <td; id="LC88"; class="blob-code blob-code-inner js-file-line">				frames <span; class="pl-k">=</span> <span; class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td; id="L89"; class="blob-num js-line-number"; data-line-number="89"></td>
        <td; id="LC89"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L90"; class="blob-num js-line-number"; data-line-number="90"></td>
        <td; id="LC90"; class="blob-code blob-code-inner js-file-line">				<span; class="pl-k">if<;/span> ( memPanel ); {</td>
      </tr>
      <tr>
        <td; id="L91"; class="blob-num js-line-number"; data-line-number="91"></td>
        <td; id="LC91"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L92"; class="blob-num js-line-number"; data-line-number="92"></td>
        <td; id="LC92"; class="blob-code blob-code-inner js-file-line">					<span; class="pl-k">var<;/span> memory <span; class="pl-k">=</span> <span; class="pl-c1">performance</span>.<span; class="pl-smi">memory</span>;</td>
      </tr>
      <tr>
        <td; id="L93"; class="blob-num js-line-number"; data-line-number="93"></td>
    < td;
    id = "LC93";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > memPanel < / span >
.<
    span;
class
    = "pl-en" > update < / span > ( < span;
class
    = "pl-smi" > memory < / span >
.<
    span;
class
    = "pl-smi" > usedJSHeapSize < / span > < span;
class
    = "pl-k" > / < / span > < span;
class
    = "pl-c1" > 1048576 < / span >,;
<
    span;
class
    = "pl-smi" > memory < / span >
.<
    span;
class
    = "pl-smi" > jsHeapSizeLimit < / span > < span;
class
    = "pl-k" > / < / span > < span;
class
    = "pl-c1" > 1048576 < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L94"; class="blob-num js-line-number"; data-line-number="94"></td>
        <td; id="LC94"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L95"; class="blob-num js-line-number"; data-line-number="95"></td>
        <td; id="LC95"; class="blob-code blob-code-inner js-file-line">				};;;;;;;</td>
      </tr>
      <tr>
        <td; id="L96"; class="blob-num js-line-number"; data-line-number="96"></td>
        <td; id="LC96"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L97"; class="blob-num js-line-number"; data-line-number="97"></td>
        <td; id="LC97"; class="blob-code blob-code-inner js-file-line">			};;</td>
      </tr>
      <tr>
        <td; id="L98"; class="blob-num js-line-number"; data-line-number="98"></td>
        <td; id="LC98"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L99"; class="blob-num js-line-number"; data-line-number="99"></td>
        <td; id="LC99"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-k">return;</span> time;</td>
      </tr>
      <tr>
        <td; id="L100"; class="blob-num js-line-number"; data-line-number="100"></td>
        <td; id="LC100"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L101"; class="blob-num js-line-number"; data-line-number="101"></td>
        <td; id="LC101"; class="blob-code blob-code-inner js-file-line">		};,</td>
      </tr>
      <tr>
        <td; id="L102"; class="blob-num js-line-number"; data-line-number="102"></td>
        <td; id="LC102"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L103"; class="blob-num js-line-number"; data-line-number="103"></td>
        <td; id="LC103"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-en">update</span><span; class="pl-k">:</span> <span; class="pl-k">function</span> (); {</td>
      </tr>
      <tr>
        <td; id="L104"; class="blob-num js-line-number"; data-line-number="104"></td>
        <td; id="LC104"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L105"; class="blob-num js-line-number"; data-line-number="105"></td>
        <td; id="LC105"; class="blob-code blob-code-inner js-file-line">			beginTime <span; class="pl-k">=</span> <span; class="pl-c1">this</span>.<span; class="pl-en">end</span>();</td>
      </tr>
      <tr>
        <td; id="L106"; class="blob-num js-line-number"; data-line-number="106"></td>
        <td; id="LC106"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L107"; class="blob-num js-line-number"; data-line-number="107"></td>
        <td; id="LC107"; class="blob-code blob-code-inner js-file-line">		};,</td>
      </tr>
      <tr>
        <td; id="L108"; class="blob-num js-line-number"; data-line-number="108"></td>
        <td; id="LC108"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L109"; class="blob-num js-line-number"; data-line-number="109"></td>
        <td; id="LC109"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-c"><span; class="pl-c">//</span> Backwards Compatibility</span></td>
      </tr>
      <tr>
        <td; id="L110"; class="blob-num js-line-number"; data-line-number="110"></td>
        <td; id="LC110"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L111"; class="blob-num js-line-number"; data-line-number="111"></td>
        <td; id="LC111"; class="blob-code blob-code-inner js-file-line">		domElement<span; class="pl-k">:</span> container,</td>
      </tr>
      <tr>
        <td; id="L112"; class="blob-num js-line-number"; data-line-number="112"></td>
        <td; id="LC112"; class="blob-code blob-code-inner js-file-line">		setMode<span; class="pl-k">:</span> showPanel</td>
      </tr>
      <tr>
        <td; id="L113"; class="blob-num js-line-number"; data-line-number="113"></td>
        <td; id="LC113"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L114"; class="blob-num js-line-number"; data-line-number="114"></td>
    < td;
    id = "LC114";
class
    = "blob-code blob-code-inner js-file-line" >
};;;;;;;;;;;</
    td >
    </tr>
      <tr>
        <td; id="L115"; class="blob-num js-line-number"; data-line-number="115"></td>
        <td; id="LC115"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L116"; class="blob-num js-line-number"; data-line-number="116"></td>
    < td;
    id = "LC116";
class
    = "blob-code blob-code-inner js-file-line" >
};;;;;;;
</
    td >
    </tr>
      <tr>
        <td; id="L117"; class="blob-num js-line-number"; data-line-number="117"></td>
        <td; id="LC117"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L118"; class="blob-num js-line-number"; data-line-number="118"></td>
        <td; id="LC118"; class="blob-code blob-code-inner js-file-line"><span; class="pl-smi">Stats</span>.<span; class="pl-en">Panel</span> <span; class="pl-k">=</span> <span; class="pl-k">function</span> ( <span; class="pl-smi">name</span>,; <span; class="pl-smi">fg</span>,; <span; class="pl-smi">bg</span>; ) {</td>
      </tr>
      <tr>
        <td; id="L119"; class="blob-num js-line-number"; data-line-number="119"></td>
        <td; id="LC119"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L120"; class="blob-num js-line-number"; data-line-number="120"></td>
        <td; id="LC120"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">var<;/span> min <span; class="pl-k">=</span> <span; class="pl-c1">Infinity</span>, max <span; class="pl-k">=</span> <span; class="pl-c1">0</span>, round <span; class="pl-k">=</span> <span; class="pl-c1">Math</span>.<span; class="pl-smi">round</span>;</td>
      </tr>
      <tr>
        <td; id="L121"; class="blob-num js-line-number"; data-line-number="121"></td>
    < td;
    id = "LC121";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > < span;
class
    = "pl-c1" > PR < / span > < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-en" > round < / span > ( < span;
class
    = "pl-c1" > window < / span >
.<
    span;
class
    = "pl-smi" > devicePixelRatio < / span > < span;
class
    = "pl-k" > || < / span > < span;
class
    = "pl-c1" > 1 < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L122"; class="blob-num js-line-number"; data-line-number="122"></td>
        <td; id="LC122"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L123"; class="blob-num js-line-number"; data-line-number="123"></td>
        <td; id="LC123"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">var<;/span> <span; class="pl-c1">WIDTH</span> <span; class="pl-k">=</span> <span; class="pl-c1">80</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,; <span; class="pl-c1">HEIGHT</span> <span; class="pl-k">=</span> <span; class="pl-c1">48</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,</td>
      </tr>
      <tr>
        <td; id="L124"; class="blob-num js-line-number"; data-line-number="124"></td>
        <td; id="LC124"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-c1">TEXT_X</span> <span; class="pl-k">=</span> <span; class="pl-c1">3</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,; <span; class="pl-c1">TEXT_Y</span> <span; class="pl-k">=</span> <span; class="pl-c1">2</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,</td>
      </tr>
      <tr>
        <td; id="L125"; class="blob-num js-line-number"; data-line-number="125"></td>
        <td; id="LC125"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-c1">GRAPH_X</span> <span; class="pl-k">=</span> <span; class="pl-c1">3</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,; <span; class="pl-c1">GRAPH_Y</span> <span; class="pl-k">=</span> <span; class="pl-c1">15</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,</td>
      </tr>
      <tr>
        <td; id="L126"; class="blob-num js-line-number"; data-line-number="126"></td>
        <td; id="LC126"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-c1">GRAPH_WIDTH</span> <span; class="pl-k">=</span> <span; class="pl-c1">74</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>,; <span; class="pl-c1">GRAPH_HEIGHT</span> <span; class="pl-k">=</span> <span; class="pl-c1">30</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>;</td>
      </tr>
      <tr>
        <td; id="L127"; class="blob-num js-line-number"; data-line-number="127"></td>
        <td; id="LC127"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L128"; class="blob-num js-line-number"; data-line-number="128"></td>
    < td;
    id = "LC128";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > canvas < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-c1" > document < / span >
.<
    span;
class
    = "pl-c1" > createElement < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > canvas < span;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L129"; class="blob-num js-line-number"; data-line-number="129"></td>
        <td; id="LC129"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">canvas</span>.<span; class="pl-c1">width</span> <span; class="pl-k">=</span> <span; class="pl-c1">WIDTH</span>;</td>
      </tr>
      <tr>
        <td; id="L130"; class="blob-num js-line-number"; data-line-number="130"></td>
        <td; id="LC130"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">canvas</span>.<span; class="pl-c1">height</span> <span; class="pl-k">=</span> <span; class="pl-c1">HEIGHT</span>;</td>
      </tr>
      <tr>
        <td; id="L131"; class="blob-num js-line-number"; data-line-number="131"></td>
        <td; id="LC131"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">canvas</span>.<span; class="pl-c1">style</span>.<span; class="pl-smi">cssText</span> <span; class="pl-k">=</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>width:80px;;48px<span;; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L132"; class="blob-num js-line-number"; data-line-number="132"></td>
        <td; id="LC132"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L133"; class="blob-num js-line-number"; data-line-number="133"></td>
    < td;
    id = "LC133";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-k" >
    var <;
/
    span > context < span;
class
    = "pl-k" >= < / span > < span;
class
    = "pl-smi" > canvas < / span >
.<
    span;
class
    = "pl-c1" > getContext < / span > ( < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > 2
    d < span;;
class
    = "pl-pds" > &#39;
</
    span > < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L134"; class="blob-num js-line-number"; data-line-number="134"></td>
        <td; id="LC134"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">font</span> <span; class="pl-k">=</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>bold <span; class="pl-pds">&#39;</span></span> <span; class="pl-k">+</span> ( <span; class="pl-c1">9</span> <span; class="pl-k">*</span> <span; class="pl-c1">PR</span>; ) <span; class="pl-k">+</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>px; Helvetica,Arial,sans-serif<span; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L135"; class="blob-num js-line-number"; data-line-number="135"></td>
        <td; id="LC135"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">textBaseline</span> <span; class="pl-k">=</span> <span; class="pl-s"><span; class="pl-pds">&#39;</span>top<span; class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td; id="L136"; class="blob-num js-line-number"; data-line-number="136"></td>
        <td; id="LC136"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L137"; class="blob-num js-line-number"; data-line-number="137"></td>
        <td; id="LC137"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> bg;</td>
      </tr>
      <tr>
        <td; id="L138"; class="blob-num js-line-number"; data-line-number="138"></td>
    < td;
    id = "LC138";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > 0 < / span >,;
<
    span;
class
    = "pl-c1" > 0 < / span >,;
<
    span;
class
    = "pl-c1" > WIDTH < / span >,;
<
    span;
class
    = "pl-c1" > HEIGHT < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L139"; class="blob-num js-line-number"; data-line-number="139"></td>
        <td; id="LC139"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L140"; class="blob-num js-line-number"; data-line-number="140"></td>
        <td; id="LC140"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> fg;</td>
      </tr>
      <tr>
        <td; id="L141"; class="blob-num js-line-number"; data-line-number="141"></td>
    < td;
    id = "LC141";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillText < / span > ( name, < span;
class
    = "pl-c1" > TEXT_X < / span >,;
<
    span;
class
    = "pl-c1" > TEXT_Y < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L142"; class="blob-num js-line-number"; data-line-number="142"></td>
    < td;
    id = "LC142";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > GRAPH_X < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_WIDTH < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L143"; class="blob-num js-line-number"; data-line-number="143"></td>
        <td; id="LC143"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L144"; class="blob-num js-line-number"; data-line-number="144"></td>
        <td; id="LC144"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> bg;</td>
      </tr>
      <tr>
        <td; id="L145"; class="blob-num js-line-number"; data-line-number="145"></td>
        <td; id="LC145"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-smi">context</span>.<span; class="pl-smi">globalAlpha</span> <span; class="pl-k">=</span> <span; class="pl-c1">0.9</span>;</td>
      </tr>
      <tr>
        <td; id="L146"; class="blob-num js-line-number"; data-line-number="146"></td>
    < td;
    id = "LC146";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > GRAPH_X < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_WIDTH < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L147"; class="blob-num js-line-number"; data-line-number="147"></td>
        <td; id="LC147"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L148"; class="blob-num js-line-number"; data-line-number="148"></td>
        <td; id="LC148"; class="blob-code blob-code-inner js-file-line">	<span; class="pl-k">return;</span> {</td>
      </tr>
      <tr>
        <td; id="L149"; class="blob-num js-line-number"; data-line-number="149"></td>
        <td; id="LC149"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L150"; class="blob-num js-line-number"; data-line-number="150"></td>
        <td; id="LC150"; class="blob-code blob-code-inner js-file-line">		dom<span; class="pl-k">:</span> canvas,</td>
      </tr>
      <tr>
        <td; id="L151"; class="blob-num js-line-number"; data-line-number="151"></td>
        <td; id="LC151"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L152"; class="blob-num js-line-number"; data-line-number="152"></td>
        <td; id="LC152"; class="blob-code blob-code-inner js-file-line">		<span; class="pl-en">update</span><span; class="pl-k">:</span> <span; class="pl-k">function</span> ( <span; class="pl-smi">value</span>,; <span; class="pl-smi">maxValue</span>; ) {</td>
      </tr>
      <tr>
        <td; id="L153"; class="blob-num js-line-number"; data-line-number="153"></td>
        <td; id="LC153"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L154"; class="blob-num js-line-number"; data-line-number="154"></td>
        <td; id="LC154"; class="blob-code blob-code-inner js-file-line">			min <span; class="pl-k">=</span> <span; class="pl-c1">Math</span>.<span; class="pl-c1">min</span>( min, value );</td>
      </tr>
      <tr>
        <td; id="L155"; class="blob-num js-line-number"; data-line-number="155"></td>
        <td; id="LC155"; class="blob-code blob-code-inner js-file-line">			max <span; class="pl-k">=</span> <span; class="pl-c1">Math</span>.<span; class="pl-c1">max</span>( max, value );</td>
      </tr>
      <tr>
        <td; id="L156"; class="blob-num js-line-number"; data-line-number="156"></td>
        <td; id="LC156"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L157"; class="blob-num js-line-number"; data-line-number="157"></td>
        <td; id="LC157"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> bg;</td>
      </tr>
      <tr>
        <td; id="L158"; class="blob-num js-line-number"; data-line-number="158"></td>
        <td; id="LC158"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">context</span>.<span; class="pl-smi">globalAlpha</span> <span; class="pl-k">=</span> <span; class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td; id="L159"; class="blob-num js-line-number"; data-line-number="159"></td>
    < td;
    id = "LC159";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > 0 < / span >,;
<
    span;
class
    = "pl-c1" > 0 < / span >,;
<
    span;
class
    = "pl-c1" > WIDTH < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L160"; class="blob-num js-line-number"; data-line-number="160"></td>
        <td; id="LC160"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> fg;</td>
      </tr>
      <tr>
        <td; id="L161"; class="blob-num js-line-number"; data-line-number="161"></td>
    < td;
    id = "LC161";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillText < / span > ( < span;
class
    = "pl-en" > round < / span > ( value ) < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > < span;
class
    = "pl-pds" > &#39;
</
    span > < / span > < span;
class
    = "pl-k" > + < / span > name < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > ( < span;
class
    = "pl-pds" > &#39;
</
    span > < / span > < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-en" > round < / span > ( min ) < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span > - < span;
class
    = "pl-pds" > &#39;
</
    span > < / span > < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-en" > round < / span > ( max ) < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-s" > < span;
class
    = "pl-pds" > &#39;
</
    span >
)<
    span;
class
    = "pl-pds" > &#39;
</
    span > < / span >,;
<
    span;
class
    = "pl-c1" > TEXT_X < / span >,;
<
    span;
class
    = "pl-c1" > TEXT_Y < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L162"; class="blob-num js-line-number"; data-line-number="162"></td>
        <td; id="LC162"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L163"; class="blob-num js-line-number"; data-line-number="163"></td>
    < td;
    id = "LC163";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > drawImage < / span > ( canvas, < span;
class
    = "pl-c1" > GRAPH_X < / span > < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_WIDTH < / span > < span;
class
    = "pl-k" > - < / span > < span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_X < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_WIDTH < / span > < span;
class
    = "pl-k" > - < / span > < span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L164"; class="blob-num js-line-number"; data-line-number="164"></td>
        <td; id="LC164"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L165"; class="blob-num js-line-number"; data-line-number="165"></td>
    < td;
    id = "LC165";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > GRAPH_X < / span > < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-c1" > GRAPH_WIDTH < / span > < span;
class
    = "pl-k" > - < / span > < span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >;
)</
    td >
    </tr>
      <tr>
        <td; id="L166"; class="blob-num js-line-number"; data-line-number="166"></td>
        <td; id="LC166"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L167"; class="blob-num js-line-number"; data-line-number="167"></td>
        <td; id="LC167"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">context</span>.<span; class="pl-smi">fillStyle</span> <span; class="pl-k">=</span> bg;</td>
      </tr>
      <tr>
        <td; id="L168"; class="blob-num js-line-number"; data-line-number="168"></td>
        <td; id="LC168"; class="blob-code blob-code-inner js-file-line">			<span; class="pl-smi">context</span>.<span; class="pl-smi">globalAlpha</span> <span; class="pl-k">=</span> <span; class="pl-c1">0.9</span>;</td>
      </tr>
      <tr>
        <td; id="L169"; class="blob-num js-line-number"; data-line-number="169"></td>
    < td;
    id = "LC169";
class
    = "blob-code blob-code-inner js-file-line" > < span;
class
    = "pl-smi" > context < / span >
.<
    span;
class
    = "pl-en" > fillRect < / span > ( < span;
class
    = "pl-c1" > GRAPH_X < / span > < span;
class
    = "pl-k" > + < / span > < span;
class
    = "pl-c1" > GRAPH_WIDTH < / span > < span;
class
    = "pl-k" > - < / span > < span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-c1" > GRAPH_Y < / span >,;
<
    span;
class
    = "pl-c1" > PR < / span >,;
<
    span;
class
    = "pl-en" > round < / span > ( ( < span;
class
    = "pl-c1" > 1 < / span > < span;
class
    = "pl-k" > - < / span > ( value < span;
class
    = "pl-k" > / < / span > maxValue
) ) <
    span;
class
    = "pl-k" > * < / span > < span;
class
    = "pl-c1" > GRAPH_HEIGHT < / span >;
) )</
    td >
    </tr>
      <tr>
        <td; id="L170"; class="blob-num js-line-number"; data-line-number="170"></td>
        <td; id="LC170"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L171"; class="blob-num js-line-number"; data-line-number="171"></td>
        <td; id="LC171"; class="blob-code blob-code-inner js-file-line">		};;;;;;;;;;;;;;;;;;;;;;</td>
      </tr>
      <tr>
        <td; id="L172"; class="blob-num js-line-number"; data-line-number="172"></td>
        <td; id="LC172"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L173"; class="blob-num js-line-number"; data-line-number="173"></td>
    < td;
    id = "LC173";
class
    = "blob-code blob-code-inner js-file-line" >
}</
    td >
    </tr>
      <tr>
        <td; id="L174"; class="blob-num js-line-number"; data-line-number="174"></td>
        <td; id="LC174"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L175"; class="blob-num js-line-number"; data-line-number="175"></td>
    < td;
    id = "LC175";
class
    = "blob-code blob-code-inner js-file-line" >
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
</
    td >
    </tr>
      <tr>
        <td; id="L176"; class="blob-num js-line-number"; data-line-number="176"></td>
        <td; id="LC176"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L177"; class="blob-num js-line-number"; data-line-number="177"></td>
        <td; id="LC177"; class="blob-code blob-code-inner js-file-line"><span; class="pl-k">return;</span> Stats;</td>
      </tr>
      <tr>
        <td; id="L178"; class="blob-num js-line-number"; data-line-number="178"></td>
        <td; id="LC178"; class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td; id="L179"; class="blob-num js-line-number"; data-line-number="179"></td>
    < td;
    id = "LC179";
class
    = "blob-code blob-code-inner js-file-line" >
};;
)))</
td >
</tr>
</table>

  </div>

</div>

<button; type="button"; data-facebox="#jump-to-line"; data-facebox-class="linejump"; data-hotkey="l"; class="d-none">Jump; to; Line</button>
<div; id="jump-to-line"; style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input; class="form-control linejump-input js-jump-to-line-field"; type="text"; placeholder="Jump to line&hellip;"; aria-label="Jump to line"; autofocus>
    <button; type="submit"; class="btn">Go</button>
</form></div>

  </div>
  <div; class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div; class="container site-footer-container">
  <div; class="site-footer"; role="contentinfo">
    <ul; class="site-footer-links float-right">
        <li><a; href="https://github.com/contact"; data-ga-click="Footer, go to contact, text:contact">Contact; GitHub</a></li>
      <li><a; href="https://developer.github.com"; data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a; href="https://training.github.com"; data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a; href="https://shop.github.com"; data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a; href="https://github.com/blog"; data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a; href="https://github.com/about"; data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a; href="https://github.com"; aria-label="Homepage"; class="site-footer-mark"; title="GitHub">
      <svg; aria-hidden="true"; class="octicon octicon-mark-github"; height="24"; version="1.1"; viewBox="0 0 16 16"; width="24"><path; fill-rule="evenodd"; d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul; class="site-footer-links">
      <li>&copy; 2017 <span; title="0.12676s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a; href="https://github.com/site/terms"; data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a; href="https://github.com/site/privacy"; data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a; href="https://github.com/security"; data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a; href="https://status.github.com/"; data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a; href="https://help.github.com"; data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div; id="ajax-error-message"; class="ajax-error-message flash flash-error">
    <svg; aria-hidden="true"; class="octicon octicon-alert"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button; type="button"; class="flash-close js-flash-close js-ajax-error-dismiss"; aria-label="Dismiss error">
      <svg; aria-hidden="true"; class="octicon octicon-x"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You; can't perform that action at this time.
  </div>


    
    <script;; crossorigin="anonymous"; integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI="; src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script; async="async"; crossorigin="anonymous"; integrity="sha256-JoKHHq/cp2qoENrGskMxUOT5pYEP0pMGxRSbKe+BzDE="; src="https://assets-cdn.github.com/assets/github-2682871eafdca76aa810dac6b2433150e4f9a5810fd29306c5149b29ef81cc31.js"></script>
    
    
    
    
  <div; class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg; aria-hidden="true"; class="octicon octicon-alert"; height="16"; version="1.1"; viewBox="0 0 16 16"; width="16"><path; fill-rule="evenodd"; d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span; class="signed-in-tab-flash">You; signed in; with another tab; or; window. <a; href="">Reload</a> to; refresh; your; session.</span>
    <span; class="signed-out-tab-flash">You; signed; out in another; tab; or; window. <a; href="">Reload</a> to; refresh; your; session.</span>
  </div>
  <div; class="facebox"; id="facebox"; style="display:none;">
  <div; class="facebox-popup">
    <div; class="facebox-content"; role="dialog"; aria-labelledby="facebox-header"; aria-describedby="facebox-description">
    </div>
    <button; type="button"; class="facebox-close js-facebox-close"; aria-label="Close modal">
      <svg; aria-hidden="true"; class="octicon octicon-x"; height="16"; version="1.1"; viewBox="0 0 12 16"; width="12"><path; fill-rule="evenodd"; d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>;

