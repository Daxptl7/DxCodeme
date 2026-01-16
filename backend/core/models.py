from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = (
        ('AI', 'Artificial Intelligence/Data Science'),
        ('WEB', 'Web Development'),
        ('LANG', 'Programming Languages'),
        ('TOOL', 'Tools & Others'),
    )
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=4, choices=CATEGORY_CHOICES)
    proficiency = models.IntegerField(default=1, help_text="1-100")
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    demo_link = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField(Skill, related_name='projects')
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.role} at {self.company}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
