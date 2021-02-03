export default {
    methods: {
        ToggleGaEvent(action, label, value) {
            const params = {
                hitType: 'event',
                eventCategory: action,
                eventAction: action,
                eventLabel: label,
                eventValue: value,
            }
            window.ga('send', params)
        }
    }
}