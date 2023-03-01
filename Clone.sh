# Insert this ONE FILE into your project and run it
# to clone and move gitpod.
currentDirname=${PWD##*/}

# Info about the template you want.
# https://(gitdomain)/(gitusername)/(gitreponame).git
GIT_DOMAIN="github.com"
GIT_USERNAME="GavinGoGaming"
GIT_REPONAME="gitpod-nodejs-template"
FULL_GIT_URL="https://$GIT_DOMAIN/$GIT_USERNAME/$GIT_REPONAME.git"

CLONE="true"
MOVE_OUT="true"

# Are you already cloned and inside?
# Uncomment the line below and re-comment the if statement under it to manually set this.
# ALREADY_INSIDE="false"
if [ "$currentDirname" == "$GIT_REPONAME" ]; then
    ALREADY_INSIDE="true"
else 
    ALREADY_INSIDE="false"
fi

# code below smashed together by gavingogaming
#dont modify unless yk what ur doin, ig
echo "Starting!"
echo "Using \"$GIT_DOMAIN\" with the repo \"$GIT_USERNAME/$GIT_REPONAME\""
echo "Clone the repo is set to $CLONE"
if [ "$CLONE" == "true" ]; then
    echo "Cloning $FULL_GIT_URL..."
    git clone $FULL_GIT_URL
    echo "Done!"
fi
echo "Move the files out of the cloned repo is set to $MOVE_OUT"
if [ "$MOVE_OUT" == "true" ]; then
    if [ "$ALREADY_INSIDE" == "true" ]; then
        echo "Moving out files..."
        mv ./* ../
        cd ..
        rmdir $GIT_REPONAME
        echo "Done!"
    else
        echo "Moving out files..."
        mv $GIT_REPONAME/* ./
        rmdir $GIT_REPONAME
        echo "Done!"
    fi
fi
echo "Completed install. Exiting."
exit 1