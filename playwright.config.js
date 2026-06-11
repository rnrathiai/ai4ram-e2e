const {defineConfig, devices, firefox} = require('@playwright/test');


module.exports = defineConfig({
    testDir: './test',
    timeout: 30000,
    retries:1,
    use:{
        baseURL: 'http://localhost:5173',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects:[
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        },
        {
            name:'firefox',
            use: {...devices['Desktop Firefox']}

        }
    ]
});
