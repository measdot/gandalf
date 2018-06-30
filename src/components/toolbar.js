const bug = require('./bug')


module.exports = {
    init: function () {
			return $().w2toolbar({
				name: 'toolbar',
				items: [
					{ type: 'menu-radio', id: 'item2', icon: 'icon ion-md-eye',
						text: function (item) {
							var text = item.selected;
							var el   = this.get('item2:' + item.selected);
							return 'show tab';
						},
						selected: 'id3',
						items: [
							{ id: 'id1', text: 'Tab 1', icon: 'fa-camera' },
							{ id: 'id2', text: 'Tab 2', icon: 'fa-picture' },
							{ id: 'id3', text: 'Tab 3', icon: 'fa-glass'}
						]
					},
					{ type: 'break' },
					{ type: 'menu-check', id: 'item3', text: 'Close tab(s)', icon: 'icon ion-md-close',
						selected: ['id3', 'id4'],
						onRefresh: function (event) {
							event.item.count = event.item.selected.length;
						},
						items: [
							{ id: 'id1', text: 'Current', icon: 'fa-camera' },
							{ id: 'id2', text: 'Tab 2', icon: 'fa-picture' },
							{ id: 'id3', text: 'Tab 3', icon: 'fa-glass', count: 12 },
							{ text: '--' },
							{ id: 'id4', text: 'All tabs', icon: 'fa-glass' }
						]
					},
					{ type: 'spacer' },
					{
						type: 'button',  id: 'view-logs',  text: 'view logs', icon: 'icon ion-md-clipboard'
					}
				],
				onClick:function (event) {

					switch (event.target){
						case 'view-logs':
							var filename = '/Users/kumar/gandalf_app_capture_'+Date.now()+'.png';
							bug(
								{
									filename:filename,
									delay:'1'
								},
								function(data){
									alert('Screenshot Saved to  file: '+ filename);
								}
							);
							// w2ui['layout'+w2ui['tabs'].active].toggle('preview');
							break;
					}
				}
			});
		}
}