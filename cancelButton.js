Ext.ns('com.penny')

com.penny.CancelButton = Ext.extend(Ext.Button, {
    text: 'cancel',
    initComponent: function () {
        com.penny.CancelButton.superclass.initComponent.call(this);
        this.on('click', this.onButtonClick, this)
    },
    onButtonClick: function (oEvent) {
        Ext.Msg.alert('Cancel Button', 'This is customized cancel button, you clicked me.')
    },
})

Ext.reg('com.penny.CancelButton', com.penny.CancelButton);
