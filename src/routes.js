export default {

    ehr: {
        initialRoute: true,
        title: 'EHR',
        component: require('./scenes/ehr/patient.list').default,
        children: {
            detail: {
                component: require('./scenes/ehr/patient.detail').default
            },
            form: {
                component: require('./scenes/ehr/patient.form').default
            }
        }
    },
    login: {
        title: 'Login',
        component: require('./scenes/login/login').LoginForm
    },
    settings: {
        title: 'Settings',
        component: require('./scenes/settings/settings').default
    },
    appointment: {
        title: 'Appointment',
        component: require('./scenes/appointment/appointment').default,
        children: {
            form: {
                component: require('./scenes/appointment/appointment.form').default
            }
        }
    }
}