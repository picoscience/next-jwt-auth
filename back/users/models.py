from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, 
    AbstractBaseUser,
    PermissionsMixin
)

class UserAccountManager(BaseUserManager):
    def create_user(self, user_name, password=None, **kwargs):
        if not user_name:
            raise ValueError("Users must have an 'user' name")
        user = self.model(
            user_name=user_name,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **kwargs):
        user = self.create_user(
            email,
            password=password,
            **kwargs
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    
class UserAccount(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True)

    email = models.EmailField(unique=True,max_length=255)
    user_name = models.CharField(unique=True,max_length=255)
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    def __str__(self):
        return self.email
