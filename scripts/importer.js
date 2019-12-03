$(function(){ $("header").load("header.html") });
$(function(){ $("footer").load("footer.html") });
$(function(){ 
  const caseStudies = $("li.caseStudy")
  if(caseStudies.length > 0){
    $.get("caseStudy.html", function( loaded ) {
      caseStudies.each((index, li) => {
        template = $(loaded)
        template.prop('id', $(li).prop('id'))
        template.find('h1').text($(li).data('name'))
        template.find('a').prop('href', $(li).data('link'))
        $(li).replaceWith(template)
      })
    });
  }
});
$(function(){ 
  const sectionHeaders = $("section.sectionHeader")
  if(sectionHeaders.length > 0){
    $.get("sectionHeader.html", function( loaded ) {
      sectionHeaders.each((index, section) => {
        template = $(loaded)
        template.find('h2').text($(section).data('title'))
        template.find('h6').text($(section).data('subtitle'))
        template.find('p').text($(section).data('description'))
        $(section).replaceWith(template)
      })
    });
  }
});

$(function(){ 
  const sectionHeaders = $("div.subHeader")
  if(sectionHeaders.length > 0){
    $.get("subHeader.html", function( loaded ) {
      sectionHeaders.each((index, section) => {
        template = $(loaded)

        $.each( $(section).prop("attributes"), function() {
          if(!this.name.startsWith('data')){
            template.attr(this.name, this.value);
          }
        });

        template.find('h3').text($(section).data('title'))
        template.find('p').text($(section).data('description'))
        $(section).replaceWith(template)
      })
    });
  }
});