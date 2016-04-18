declare var $:JQueryStatic;

export abstract class PanelComponent {

    public collapsePanel(event) {
        var ibox: JQuery = $(event.target).closest('div.ibox');
        var button: JQuery = $(event.target).closest('i');
        var content: JQuery = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    }

    public closePanel (event) {
        var content = $(event.target).closest('div.ibox');
        content.remove();
    }

    public fullScreenPanel(event) {
        var ibox = $(event.target).closest('div.ibox');
        var button = $(event.target).closest('i');
        jQuery('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    }
}
