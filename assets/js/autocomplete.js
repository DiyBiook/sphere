"use strict";$(document).ready(function(){var e=algoliasearch("ITI5JHZJM9","b427318cf6d881e5d3ffd84adf39219e").initIndex("diybiosphere"),t=Hogan.compile('\n\n    <h5 class="ui header">\n      {{{ _highlightResult.title.value }}}\n      <div class="sub header">\n        <span>\n        {{#project}}Project {{/project}}{{#startup}}Startup {{/startup}}{{#lab}}Lab {{/lab}}{{#incubator}}Incubator {{/incubator}}{{#group}}Group {{/group}}{{#network}}Network {{/network}}{{#event}}Event {{/event}}{{#other}}Other {{/other}}\n        {{#hostsArray}} {{#project}}by {{/project}} {{^project}}at {{/project}}{{/hostsArray}}\n        {{#hostsSimple}}<em>{{ . }} </em>{{/hostsSimple}}\n          <br>\n          <i class="far fa-map-marker-alt fa-fw fa-xs"></i>{{#city}} {{{ _highlightResult.city.value }}}, {{/city}} {{#country}}{{{ _highlightResult.country.value }}} {{/country}}\n        </span>\n      </div>\n    </h5>\n\n');autocomplete("#aa-search-input",{hint:!0,debug:!0},[{source:autocomplete.sources.hits(e,{hitsPerPage:5}),displayKey:"title",templates:{suggestion:function(e){return t.render(e)}}}]).on("autocomplete:selected",function(e,t){window.location.href=t.url}),autocomplete("#aa-search-input-tablet",{hint:!0,debug:!0},[{source:autocomplete.sources.hits(e,{hitsPerPage:5}),displayKey:"title",templates:{suggestion:function(e){return t.render(e)}}}]).on("autocomplete:selected",function(e,t){window.location.href=t.url}),autocomplete("#aa-search-input-mobile",{hint:!0,debug:!0},[{source:autocomplete.sources.hits(e,{hitsPerPage:5}),displayKey:"title",templates:{suggestion:function(e){return t.render(e)}}}]).on("autocomplete:selected",function(e,t){window.location.href=t.url})});