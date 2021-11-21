def buildApp() {
    echo 'building the application'
    echo 'The app is buileded now be happy!'
    sh'mkdir /usr/local/nvm'
    sh'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh |NVM_DIR=/usr/local/nvm bash'
    sh'. /usr/local/nvm/nvm.sh'
   
    sh 'nvm  install 14.18.1 -g'
}

def testApp() {
    echo 'Testing  the application'
    
}

def deployApp() {
    echo 'Testing  the application oj Kenkins server'
    //echo "deploying version ${params.VERSION}"
}

return this 
